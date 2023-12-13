import React from "react";
import { ButtonContainer, TextTitle } from "./styles";
import { ButtonIconSmall } from "../ButtonIconSmall";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &  {
  textTitle: string;
}

export function ListFlashcard({textTitle, ...rest}: Props) {
  return (
    <ButtonContainer {...rest}>
      <TextTitle>
        {textTitle}
      </TextTitle>
 
        <ButtonIconSmall
          iconName="trash"
          iconSize={25}
        />
 
    </ButtonContainer>
  );
}