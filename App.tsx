import React from 'react';
import AppLoading from 'expo-app-loading';
//importar o themeprovider que é um contexto e disponbilida o theme para import e uso
import { ThemeProvider } from 'styled-components';
import  theme  from './src/global/styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

//importa por padrão o index.tsx 
import { Dashboard } from './src/screens/dashboard';



export default function App() {
  //carregando as fontes
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}


