import React from "react";
import { ModalButton, ModalContainer, ModalContent, Text } from "./styles";
import theme from "../../../theme";
import { ButtonIconSmall } from "../../Botton/ButtonIconSmall";

type Props = {
  onCancel?: () => void;
  onSave?: () => void;
  onChangeNameDeck?: () => void;
  onChangeStatistic?: () => void;
  onChangeDelete?: () => void;
}

export function ModalButtonOptions({ onCancel, onSave, onChangeNameDeck, onChangeStatistic, onChangeDelete }: Props) {
  return (
    <ModalContainer>
      <ModalContent >
      <Text style={{fontFamily: 'Roboto-Bold'}}>Selecione: </Text>
      <ModalButton onPress={onChangeNameDeck}><Text>Editar nome Deck</Text></ModalButton>
      <ModalButton onPress={onChangeStatistic}><Text>Estastiticas</Text></ModalButton>
      <ModalButton onPress={onChangeDelete}><Text style={{color: theme.COLORS.RED}}>Excluir</Text></ModalButton>
      <ModalButton onPress={onCancel}><Text style={{color: theme.COLORS.WHITE, borderBottomWidth: 0}}>Cancelar</Text></ModalButton>
      
      </ModalContent>
    </ModalContainer>
  );
}