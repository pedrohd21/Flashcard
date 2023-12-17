import React from "react";
import { MainTitle, Container } from "./styles";
import { ViewStyle } from "react-native";

type Props = {
  mainTitle: any;
  styles?: ViewStyle;
}

export function Title({ mainTitle, styles }: Props) {
  return (
    <Container style={styles}> 
      <MainTitle>
        {mainTitle}
      </MainTitle>
    </Container>

  )
}