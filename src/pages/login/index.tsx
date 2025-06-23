import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./styles";
import Logo from "../../assets/image/logo.png";
import Background from "../../assets/image/background.jpg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import CustomAlert from "../../components/CustomAlert";
import HorarioAlert from "../../components/HorarioAlert";

const errorImage = require("../../assets/image/tchuco.png");

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertImage, setAlertImage] = useState<any>(null);

  const [horarioModalVisible, setHorarioModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  });

  const handleUsuarioChange = (text: string) => {
    setLogin(text.toLowerCase());
  };

  const showAlert = (title: string, message: string, image?: any) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertImage(image);
    setAlertVisible(true);
  };

 const handleValidacao = async () => {
  const loginLimpo = login.trim().toLowerCase();
  const senhaLimpa = senha.trim();

  if (!loginLimpo || !senhaLimpa) {
    showAlert("Atenção", "Preencha usuário e senha!");
    return;
  }

  try {
    const response = await axios.post("http://192.168.100.126:3000/login", {
      login: loginLimpo,
      senha: senhaLimpa,
    });

    const user = response.data.user;
    const today = new Date().toISOString().split("T")[0];
    const storageKey = `lastLoginDate_${loginLimpo}_${senhaLimpa}`;

    if (user.idTipoUsuario !== 1) {
      const lastLoginDate = await AsyncStorage.getItem(storageKey);
      if (lastLoginDate === today) {
        showAlert(
          "Login Já Realizado",
          "Você já efetuou o login hoje com essas credenciais.",
          errorImage
        );
        return;
      }
    }

    await AsyncStorage.setItem(storageKey, today);

    if (user.idTipoUsuario === 1) {
      navigation.navigate("Cadastro");
    } else {
      navigation.navigate("Selecao");
    }
  } catch (error: any) {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        showAlert("Erro de Autenticação", "Usuário ou senha inválido(s)");
      } else if (status === 403) {
        setHorarioModalVisible(true);
      } else if (status === 409) {
        showAlert(
          "Login Já Realizado",
          error.response.data.message || "Você já efetuou o login hoje.",
          errorImage
        );
      } else {
        showAlert(
          "Erro",
          error.response.data.message || "Erro inesperado no servidor."
        );
      }
    } else {
      showAlert(
        "Erro de Conexão",
        "Não foi possível conectar ao servidor. Verifique sua conexão e o IP do servidor."
      );
    }
  }
};

  const handleResetLogins = async () => {
    await AsyncStorage.clear();
    showAlert("Reset", "Histórico de login limpo para testes.");
  };

  return (
    <ImageBackground
      source={Background}
      style={style.backgroundPainel}
      resizeMode="cover"
    >
      <View style={style.container}>
        <Animatable.Image
          animation="flipInY"
          delay={300}
          source={Logo}
          style={style.logo}
        />

        <Text style={style.title}>Café K&M</Text>
        <Text style={style.login}>Login</Text>

        <View style={style.inputUser}>
          {login.length === 0 && (
            <Text style={style.titleUserFixed}>Usuário</Text>
          )}
          <TextInput
            style={style.inputText}
            value={login}
            onChangeText={handleUsuarioChange}
            textAlign="left"
            autoCapitalize="none"
            keyboardType="default"
          />
        </View>

        <View style={style.inputSenha}>
          {senha.length === 0 && (
            <Text style={style.titleSenhaFixed}>Senha</Text>
          )}
          <TextInput
            style={style.inputTextSenha}
            value={senha}
            onChangeText={setSenha}
            textAlign="left"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry={!senhaVisivel}
          />
          <TouchableOpacity
            style={style.iconSenha}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Ionicons name="eye" size={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.button} onPress={handleValidacao}>
          <Text style={style.titleButton}>Acessar</Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          style={[style.button, { backgroundColor: "red", marginTop: 5 }]}
          onPress={handleResetLogins}
        >
          <Text style={style.titleButton}>Reset</Text>
        </TouchableOpacity> 
      </View>

      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />

      
      {/*DESCOMENTAR PARA APRESENTAÇÃO*/}
      {/*<HorarioAlert
        visible={horarioModalVisible}
        image={errorImage}
        title="FORA DO HORÁRIO!"
        message=" Você só pode fazer login entre 07:30 e 08:20."
        onClose={() => setHorarioModalVisible(false)}
      />*/}

      <HorarioAlert
        visible={horarioModalVisible}
        image={errorImage}
        title="OOOPS"
        message="Você está atrasado!!! "
        onClose={() => setHorarioModalVisible(false)}
      />
    </ImageBackground>
  );
}
