import { Dimensions, StyleSheet,ImageBackground } from "react-native";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "transparent",
  },

  backgroundPainel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginTop: -100,
    width: 300, // ajuste conforme sua imagem
    height: 200,
    resizeMode: "contain",
  },

  titleValidacao: {
    marginTop: 30,
    fontSize: 40,
    fontFamily: 'Oswald_400Regular, sans-serif',
    color: "#000",
    textAlign: "center",
     fontWeight: "bold", // Negrito
  },

  cafe: {
    marginTop: 20,
    width: 150, // ajuste conforme sua imagem
    height: 150,
    resizeMode: "contain",
  },

  logoBomGrill: {
  width: 300, 
  height: 150,
  resizeMode: "contain",
  alignSelf: "center", // 👈 Centraliza horizontalmente dentro do pai
  marginTop: -100, // opcional, ajuste de posição vertical se quiser
  alignItems:'center',
  justifyContent:'center',
  left:18,
  top:35
  
},

    
  button: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0050FF",
    marginTop: 70,
    borderRadius: 30,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },

  titleButton: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "SecularOne_400Regular",
  },
});