import React, { useState } from "react";
import { ButtonContainer, TextTitle, ContadorFlascard, ContainerIcon } from "./styles";
import { Modal, TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../../Botton/ButtonIconSmall';
import { ButtonCreate } from "../../Botton/ButtonCreate";
import theme from "../../../theme";

type Props = TouchableOpacityProps & {
  textTitle: string;
  contadorFlashcard?: number;
  onPressButtonCreate?: () => void;
  onPressButtonOptions?: () => void;
  onPressOpenModal?: () => void;
}


export function ListDeckCard({ textTitle, contadorFlashcard, onPressButtonCreate, onPressButtonOptions, onPressOpenModal, ...rest }: Props) {
  return (
    <ButtonContainer
      hitSlop={30}
      {...rest}
    >
      <ContainerIcon>
        <ButtonIconSmall
          iconName="ellipsis-v"
          iconColor={theme.COLORS.BLUE}
          iconSize={20}
          onPress={onPressButtonOptions}
        />
      </ContainerIcon>
      <ContadorFlascard>{contadorFlashcard}</ContadorFlascard>
      <TextTitle>
        {textTitle}
      </TextTitle>

      <ButtonCreate
        onPressButtonCreate={onPressButtonCreate}
      />

    </ButtonContainer>
  );
}