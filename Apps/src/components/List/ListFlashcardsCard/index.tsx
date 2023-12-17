import React from "react";
import { ButtonContainer, Text, TitleFront, TitleBack } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &  {
  textFront: string;
  textBack: string;
}

export function ListFlashcardsCard({textFront, textBack, ...rest}: Props) {
  return (
    <ButtonContainer {...rest}>
      <TitleFront>Front</TitleFront>
      <Text>
        {textFront}
      </Text>
      <TitleBack>Back</TitleBack>
      <Text>
        {textBack}
      </Text>
    </ButtonContainer>
  );
}