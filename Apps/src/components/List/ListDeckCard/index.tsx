import React, { useState } from "react";
import { TextTitle, ContadorFlascard, ContainerIcon, Container } from "./styles";
import { Modal, TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../../Botton/ButtonIconSmall';
import { ButtonCreate } from "../../Botton/ButtonCreate";
import theme from "../../../theme";

type Props = TouchableOpacityProps & {
  textTitle: string;
  contadorFlashcard?: number;
  onPressButtonCreate?: () => void;
  onPressButtonOptions?: () => void;
  onPressButtonEdit?: () => void;
  onPressButtonPractice?: () => void;
  onPressOpenModal?: () => void;
}


export function ListDeckCard({ textTitle, contadorFlashcard, onPressButtonCreate, onPressButtonOptions, onPressButtonPractice, onPressOpenModal, onPressButtonEdit, ...rest }: Props) {
  return (
    <Container>
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
        {textTitle} testabndo o trem pra ver se
      </TextTitle>

      <ButtonCreate
        onPressButtonCreate={onPressButtonCreate}
        onPressButtonEdit={onPressButtonEdit}
        onPressButtonPratice={onPressButtonPractice}
      />

    </Container>
  );
}