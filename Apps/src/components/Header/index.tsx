import React from "react";
// import { Text } from "react-native";
import { Container, Text, IconsRight, IconsLeft } from "./styles";

type Props = {
  title: string;
  iconNameLeft: string;
  iconNameRight: string;
  showIconLeft: boolean;
  showIconRight: boolean;
}

export function Header({ title, iconNameLeft, iconNameRight, showIconLeft, showIconRight }: Props) {
  return (
    <Container>
      {showIconLeft && <IconsRight name={iconNameLeft} />}
      <Text>{title}</Text>
      {showIconRight && <IconsLeft name={iconNameRight}/>}
    </Container>

  );
}