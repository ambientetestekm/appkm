import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { style } from "./styles";
import Logo from "../../assets/image/logo.png";
import LogoBomGrill from "../../assets/image/logoBomGrill.png";
import Background from "../../assets/image/background.jpg";
import { useFonts, SecularOne_400Regular } from "@expo-google-fonts/secular-one";

export default function Produto() {
  const navigation = useNavigation<any>();

  const [fontLoaded] = useFonts({
    SecularOne_400Regular,
  });

  const [produto, setProduto] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState("");

  useEffect(() => {
    axios
      .get("http://192.168.100.126:3000/produto")
      .then((response) => {
        console.log("Produtos recebidos:", response.data);
        setProduto(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  const handleValidacao = () => {
    if (!produtoSelecionado) {
      Alert.alert("Atenção", "Você precisa selecionar um produto.");
      return;
    }

    navigation.navigate("Validacao", { produtoId: produtoSelecionado });
  };

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0050FF" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={Background}
      style={style.backgroundPainel}
      resizeMode="cover"
    >
      <View style={style.container}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.titleSelecione}>Selecione o produto abaixo:</Text>

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            marginVertical: 20,
            width: "80%",
            top: -90
          }}
        >
          <Picker
            selectedValue={produtoSelecionado}
            onValueChange={(itemValue) => setProdutoSelecionado(itemValue)}
            style={{ height: 52, width: "100%", 
             }}
          >
            <Picker.Item label="Selecione um produto..." value="" enabled={false} />
            {produto.map((produto: any) => (
              <Picker.Item
                key={produto.id}
                label={produto.nome ? produto.nome : "sem descrição"}
                value={produto.id}
              />
            ))}
          </Picker>
        </View>

        <View style={style.logoBomGrill}>
          <Image source={LogoBomGrill} style={style.logoBomGrill} />
        </View>

        <TouchableOpacity
          style={[
            style.button,
            !produtoSelecionado && { opacity: 0.5 },
          ]}
          onPress={handleValidacao}
          disabled={!produtoSelecionado}
        >
          <Text style={style.titleButton}>OK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
