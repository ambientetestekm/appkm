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
titleCadastro:{
    top: -100,
    fontSize: 20,
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#080b0f',
    fontFamily: 'Oswald_400Regular, sans-serif' ,


},

inputCadNome:{
    top: 20,
       width: '70%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 55,
    marginTop: -80,
    flexDirection: 'row',
     textAlign:'center'

},


inputCadUsuario:{
       width: '70%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 55,
    marginTop: 50,
    flexDirection: 'row',
     textAlign:'center'

},



inputCadSenha:{
         width: '70%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 55,
    marginTop: 30,
    flexDirection: 'row',
     textAlign:'center'
    
},



inputCheckSenha:{
     width: '70%',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 55,
    marginTop: 30,
    flexDirection: 'row',
     textAlign:'center'
    
},


button:{
    
    height:45,
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