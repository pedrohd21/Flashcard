import React from "react";
import { ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer, Icon } from "./styles";
import theme from "../../../theme";
import { ButtonIconSmall } from "../../Botton/ButtonIconSmall";

type Props = {
  onCancel?: () => void;
  onSave?: () => void;
  onChangeNameDeck: (value: string) => void;
}

export function ModalChangeNameDeck({ onCancel, onSave, onChangeNameDeck, ...rest }: Props) {
  return (
    <ModalContainer >
      <ModalContent >
        <Text style={{ color: theme.COLORS.BLUE }}>Editar nome deck:</Text>
        <TextInput
          onChangeText={onChangeNameDeck}
          placeholder="Novo Nome"
          maxLength={40}
        />
        <ButtonModalContainer >
          <ModalButton {...rest} onPress={onCancel} style={{ borderColor: theme.COLORS.RED, borderWidth: 1, }}>
            <Icon
              name="times-circle"
              color={theme.COLORS.RED}
              size={17}
            />
            <Text style={{ color: theme.COLORS.RED }}>Cancelar</Text>
          </ModalButton>
          <ModalButton  {...rest} onPress={onSave} style={{ borderColor: theme.COLORS.BLUE, borderWidth: 1, }}>
            <Icon
              name="save"
              color={theme.COLORS.BLUE}
              size={17}
            />
            <Text style={{ color: theme.COLORS.BLUE }}>Salvar</Text>
          </ModalButton>
        </ButtonModalContainer>
      </ModalContent>
    </ModalContainer>
  );
}