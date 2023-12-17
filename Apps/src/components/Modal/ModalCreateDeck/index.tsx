import React from "react";
import { ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import theme from "../../../theme";
import { ButtonIconSmall } from "../../Botton/ButtonIconSmall";

type Props = {
  onCancel?: () => void;
  onSave?: () => void;
  onChangeNameDeck: (value: string) => void;
}

export function ModalCreateDeck({ onCancel, onSave, onChangeNameDeck }: Props) {
  return (
    <ModalContainer >
      <ModalContent >
        <Text style={{ color: theme.COLORS.BLUE }}>Criar Deck:</Text>
        <TextInput
          onChangeText={onChangeNameDeck}
          placeholder="Nome do Deck"
          maxLength={40}
        />
        <ButtonModalContainer >
          <ModalButton onPress={onCancel} style={{ borderColor: theme.COLORS.RED, borderWidth: 1, }}>
            <ButtonIconSmall
              iconName="times-circle"
              iconColor={theme.COLORS.RED}
              iconSize={17}
            />
            <Text style={{ color: theme.COLORS.RED }}>Cancelar</Text>
          </ModalButton>
          <ModalButton onPress={onSave} style={{ borderColor: theme.COLORS.BLUE, borderWidth: 1, }}>
            <ButtonIconSmall
              iconName="save"
              iconColor={theme.COLORS.BLUE}
              iconSize={17}
            />
            <Text style={{ color: theme.COLORS.BLUE }}>Salvar</Text>
          </ModalButton>
        </ButtonModalContainer>
      </ModalContent>
    </ModalContainer>
  );
}