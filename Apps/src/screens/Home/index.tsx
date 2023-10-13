import React from "react";
import { Container, ImageBackground } from "./styles";
import { Header } from "../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function Home() {


  return (
    <ImageBackground source={require('../../assets/img.jpg')}>
      <Container>
        <Header />
      </Container>
    </ImageBackground>

  )
}