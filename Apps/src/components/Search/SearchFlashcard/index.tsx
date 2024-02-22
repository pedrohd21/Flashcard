import React, { useState } from "react";
import { Container, TextInput } from "./styles";
import theme from "../../../theme";
import { ButtonIconSmall } from "../../Button/ButtonIconSmall";

type Props = {
  onChangeNameDeck?: (value: string) => void;
  clearText?: () => void;
  valueCleanText?: string;
  buttonFocus?: () => void;
  buttonBlur?: () => void;
}

export function SearchFlashcard({ clearText, onChangeNameDeck, valueCleanText, buttonFocus, buttonBlur }: Props) {
  return (
    <Container >
      <TextInput
        onChangeText={onChangeNameDeck}
        placeholder="Pesquisar"
        maxLength={40}
        value={valueCleanText}
        onFocus={buttonFocus}
        onBlur={buttonBlur}
      />
      <ButtonIconSmall
        iconName="times-circle"
        iconColor={theme.COLORS.RED}
        iconSize={30}
        onPress={clearText}
        
      />
    </Container>
  );
}