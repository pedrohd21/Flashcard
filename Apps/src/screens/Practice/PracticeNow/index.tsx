import React from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function PracticeNow() {
  return (
    <Container>
      <Header title='Pratice'  showBackButton/>
    </Container>
  )
}