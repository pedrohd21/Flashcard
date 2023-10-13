import React from "react";
// import { Text } from "react-native";
import { Container, Text, Icons } from "./styles";

export function Header(){
  return (
    <Container>
      <Icons name='bell-slash' />
      <Text>FlashCard</Text>
    </Container>
    
  );
}