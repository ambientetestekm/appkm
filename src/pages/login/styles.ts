import { Dimensions, StyleSheet,ImageBackground } from "react-native";


export const style=StyleSheet.create({

container:{
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%'
 

},



logo:{
    top: -150, 
   
},
title:{
    top: -130,
    fontSize: 35,
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#080b0f',
    fontFamily: 'Oswald_400Regular, sans-serif' ,


},

login:{
    top: -95,
    fontSize: 30,
    fontFamily: 'Oswald_500Regular, sans-serif'

},
inputUser:{
    flexDirection:'row',
    width: '70%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 55,
    marginTop: -70,
    

},

inputText:{
    width:'80%',
    height:50,
    position: 'relative',
    marginBottom: 20,
    paddingHorizontal:20,
    fontFamily: 'SecularOne_400Regular',
    top: -4,
    
},

inputTextSenha:{
    width:'80%',
    height:50,
    position: 'relative',
    marginBottom: 20,
    paddingHorizontal:10,
    fontFamily: 'SecularOne_400Regular',
    top: -4,
    
},
titleUserFixed:{
    position:'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1,
    fontFamily: 'SecularOne_400Regular',
    fontSize: 18,
    top: 8,
    backgroundColor:'transparent',
    color: '#555'
},

titleSenhaFixed:{
    position:'absolute',
    left: 20,
    right: 25,
    textAlign: 'center',
    zIndex: 1,
    fontFamily: 'SecularOne_400Regular',
    fontSize: 18,
    top: 8,
    backgroundColor:'transparent',
    color: '#555'
},

inputSenha:{
     width: '70%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 55,
    marginTop: 30,
    flexDirection: 'row'
    
},
titleSenha:{
 width:'80%',
    height:50,
    position: 'relative',
    marginBottom: 20,
    paddingHorizontal:20,
    fontFamily: 'SecularOne_400Regular',
    top: -4,
    
},

button:{
    width: 200,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0050FF',
    marginTop: 35,
    borderRadius: 30,
    shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    

},

titleButton:{
    color:'#ffff',
    fontSize: 20,
    fontFamily: 'SecularOne_400Regular',
    
},
iconSenha:{
    top: 2,
    left: 2,

},
backgroundPainel:{
   flex: 1,
    justifyContent: "center",
}




})