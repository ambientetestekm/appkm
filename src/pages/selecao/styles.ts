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
    top: -200,
    width: 300, // ajuste conforme sua imagem
    height: 200,
    resizeMode: "contain",
  },

  titleSelecione: {
    top: -190,
    fontSize: 18,
    fontFamily: 'Oswald_400Regular, sans-serif',
    color: "#000",    
     fontWeight: "bold", // Negrito
     left: 8

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
  top:75
  
},

    
  button: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0050FF",
    top: 120,
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