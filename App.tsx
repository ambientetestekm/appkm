import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login/index';
import Validacao from './src/pages/validacao/index';
import Selecao from './src/pages/selecao/index';
import Cadastro from './src/pages/cadastro/index'



import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
                    <Stack.Screen name="Selecao" component={Selecao} options={{ headerShown: false }} />
                    <Stack.Screen name="Validacao" component={Validacao} options={{ headerShown: false }} />
                </Stack.Navigator>
                      <StatusBar style="auto" />
                        </NavigationContainer>
        
)}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
