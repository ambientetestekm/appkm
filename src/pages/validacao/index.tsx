import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { style } from "./styles";
import Logo from "../../assets/image/logo.png";
import Cafe from "../../assets/image/cafe.png";
import LogoBomGrill from "../../assets/image/logoBomGrill.png";
import { useFonts, SecularOne_400Regular } from "@expo-google-fonts/secular-one";
import Background from "../../assets/image/background.jpg";

export default function Validacao() {
  const navigation = useNavigation<any>();

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

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={Background}
      style={style.backgroundPainel}
      resizeMode="cover"
    >
      <View style={style.container}>
        {/* LOGO */}
        <Image source={Logo} style={style.logo} />

        {/* TEXTO */}
        <Text style={style.titleValidacao}>Café da manhã Liberado!</Text>

        {/* IMAGEM DO CAFÉ */}
        <Image source={Cafe} style={style.cafe} />

        {/* LOGO BOM GRILL CENTRALIZADO */}
        <View style={style.logoBomGrill}>
          <Image source={LogoBomGrill} style={style.logoBomGrill} />
        </View>

        {/* BOTÃO */}
        <TouchableOpacity style={style.button} onPress={handleLogin}>
          <Text style={style.titleButton}>OK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
