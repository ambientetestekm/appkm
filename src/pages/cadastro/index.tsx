import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { style } from "./styles";
import Logo from "../../assets/image/logo.png";
import Background from "../../assets/image/background.jpg";
import { useFonts, SecularOne_400Regular } from "@expo-google-fonts/secular-one";

export default function Cadastro() {
  const navigation = useNavigation<any>();

   const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [fontLoaded] = useFonts({
    SecularOne_400Regular,
  });

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0050FF" />
      </View>
    );
  }
const handleCadastro = async () => {
  if (!nome || !usuario || !senha || !confirmarSenha) {
    Alert.alert("Erro", "Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    Alert.alert("Erro", "As senhas não coincidem!");
    return;
  }

  try {
    const response = await fetch("http://192.168.100.126:3000/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        login: usuario,
        senha,
      }),
    });

    const data = await response.json();

    if (response.status === 201) {
      Alert.alert("Sucesso", data.message);
      setNome("");
      setUsuario("");
      setSenha("");
      setConfirmarSenha("");
    } else {
      Alert.alert("Erro", data.message || "Falha ao cadastrar.");
    }
  } catch (error) {
    Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    console.log("Erro no cadastro:", error);
  }
};

 

  const handleSair = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={Background}
      style={style.backgroundPainel}
      resizeMode="cover"
    >
      <View style={style.container}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.titleCadastro}>CADASTRE O USUÁRIO:</Text>

        <TextInput
          placeholder="Nome"
          style={style.inputCadNome}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Login"
          style={style.inputCadUsuario}
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          placeholder="Senha"
          style={style.inputCadSenha}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          placeholder="Confirmar Senha"
          style={style.inputCheckSenha}
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        {/* Botões lado a lado */}
       <View style={{ flexDirection: "row", gap: 50, marginTop: 20, justifyContent: "center" }}>
  <TouchableOpacity style={[style.button, { width: 140 }]} onPress={handleCadastro}>
    <Text style={style.titleButton}>Cadastrar</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[style.button, { width: 140, backgroundColor: "#fff" }]}
    onPress={handleSair}
  >
    <Text style={[style.titleButton, { color: "#0050FF" }]}>Sair</Text>
  </TouchableOpacity>
</View>

      </View>
    </ImageBackground>
  );
}
