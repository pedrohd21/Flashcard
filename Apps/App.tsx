import React from 'react';
import 'react-native-gesture-handler';


import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { Loading } from './src/components/Loading';

import Routes from './src/routes';


import { Home } from "./src/screens/Home";

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      
        <Routes />
      
    </ThemeProvider>
  );
}