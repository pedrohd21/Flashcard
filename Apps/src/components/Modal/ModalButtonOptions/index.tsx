import React from "react";
import { ModalButton, ModalContainer, ModalContent, Text } from "./styles";
import theme from "../../../theme";
import { ButtonIconSmall } from "../../Botton/ButtonIconSmall";

type Props = {
  onCancel?: () => void;
  onSave?: () => void;
  onChangeNameDeck: (value: string) => void;
}

export function ModalButtonOptions({ onCancel, onSave, onChangeNameDeck }: Props) {
  return (
    <ModalContainer >
      <ModalContent >
      <Text>Selecione: </Text>
      <ModalButton><Text>Editar nome Deck</Text></ModalButton>
      <ModalButton><Text>Estastiticas</Text></ModalButton>
      <ModalButton><Text style={{color: theme.COLORS.RED}}>Excluir</Text></ModalButton>
      <ModalButton><Text style={{borderColor: theme.COLORS.BLACK, color: theme.COLORS.WHITE}}>Cancelar</Text></ModalButton>
      
      </ModalContent>
    </ModalContainer>
  );
}