import React from "react";
import { ModalButton, ModalContainer, ModalContent, Text } from "./styles";
import theme from "../../../theme";

type Props = {
  onCancel?: () => void;
  onChangeNameDeck?: () => void;
  onChangeStatistic?: () => void;
  onChangeDelete?: () => void;
}

export function ModalButtonOptions({ onCancel, onChangeNameDeck, onChangeStatistic, onChangeDelete }: Props) {
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