import React from "react";
import { ButtonContainer, TextTitle, ContadorFlascard } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../../Botton/ButtonIconSmall';
import { ButtonCreate } from "../../Botton/ButtonCreate";

type Props = TouchableOpacityProps &  {
  textTitle: string;
  contadorFlashcard?: number;
}

export function ListDeckCard({textTitle, contadorFlashcard, ...rest}: Props) {
  return (
    <ButtonContainer {...rest}>
    <ContadorFlascard>{contadorFlashcard}</ContadorFlascard>
      <TextTitle>
        {textTitle}
      </TextTitle>

      <ButtonCreate/>

    </ButtonContainer>
  );
}