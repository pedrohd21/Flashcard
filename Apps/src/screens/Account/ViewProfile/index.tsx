import React from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function ViewProfile() {
  return (
    <Container>
      <Header title='Profile' showBackButton/>
    </Container>
  )
}