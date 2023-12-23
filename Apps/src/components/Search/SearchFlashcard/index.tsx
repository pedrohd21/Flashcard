import React from "react";
import { ModalContainer, ModalContent, TextInput } from "./styles";
import theme from "../../../theme";
import { ButtonIconSmall } from "../../Botton/ButtonIconSmall";

type Props = {
  onCancel?: () => void;
  onChangeNameDeck: (value: string) => void;
}

export function SearchFlashcard({ onCancel, onChangeNameDeck }: Props) {
  return (
    <ModalContainer >
      <ModalContent >
        <TextInput
          onChangeText={onChangeNameDeck}
          placeholder="Pesquisar"
          maxLength={40}
        />
        <ButtonIconSmall
          onPress={onCancel}
          iconName="times-circle"
          iconColor={theme.COLORS.RED}
          iconSize={30}
        />
      </ModalContent>
    </ModalContainer>
  );
}