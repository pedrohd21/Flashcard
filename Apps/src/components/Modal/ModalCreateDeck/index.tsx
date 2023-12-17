import React from "react";
import { ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import theme from "../../../theme";

type Props = {
  onCancel?: () => void;
  onSave?: () => void;
  onChangeNameDeck: (value: string) => void;

}

export function ModalCreateDeck({ onCancel, onSave, onChangeNameDeck }: Props) {
  return (
    <ModalContainer >
      <ModalContent >
        <Text>Criar Deck:</Text>
        <TextInput
          onChangeText={onChangeNameDeck}
          placeholder="Nome do Deck"
        />
        <ButtonModalContainer >
          <ModalButton onPress={onCancel} style={{ backgroundColor: theme.COLORS.RED }}>
            <Text>Cancelar</Text>
          </ModalButton>
          <ModalButton onPress={onSave} style={{ backgroundColor: theme.COLORS.BLUE }}>
            <Text style={{color: theme.COLORS.BLACK}}>Salvar</Text>
          </ModalButton>
        </ButtonModalContainer>
      </ModalContent>
    </ModalContainer>
  );
}