import React from 'react';
//importar o themeprovider que é um contexto e disponbilida o theme para import e uso
import { ThemeProvider } from 'styled-components';
import  theme  from './src/global/styles/theme';

//importa por padrão o index.tsx 
import { Dashboard } from './src/screens/dashboard';



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}


