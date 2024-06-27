import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { Loading } from './src/components/Loading';

import Routes from './src/routes';

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