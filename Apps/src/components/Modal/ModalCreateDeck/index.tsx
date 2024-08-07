import React from "react";
import { ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer, Icon } from "./styles";
import theme from "../../../theme";

type Props = {
  onCancel?: () => void;
  onSave?: () => void;
  onChangeNameDeck: (value: string) => void;
}

export function ModalCreateDeck({ onCancel, onSave, onChangeNameDeck, ...rest }: Props) {
  return (
    <ModalContainer >
      <ModalContent >
        <Text style={{ fontSize: theme.FONT_SIZE.XL }}>Criar Deck:</Text>
        <TextInput
          ref={(ref) => {
            if (ref !== undefined && ref && !ref.isFocused()) {
              ref.focus();
            }
          }}

          onChangeText={onChangeNameDeck}
          placeholder="Nome do Deck"
          maxLength={30}
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