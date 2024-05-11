import React, { useCallback, useState } from "react";
import { TextTitle, ContadorFlascard, ContainerIcon, Container } from "./styles";
import { Alert, Modal, TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../../Button/ButtonIconSmall';
import { ButtonCreate } from "../../Button/ButtonCreate";
import theme from "../../../theme";
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  textTitle: string;
  contadorFlashcard?: string;
  onPressButtonCreate?: () => void;
  onPressButtonOptions?: () => void;
  onPressButtonEdit?: () => void;
  onPressButtonPractice?: () => void;
  onPressOpenModal?: () => void;
}


export function ListDeckCard({ textTitle, contadorFlashcard, onPressButtonCreate, onPressButtonOptions, onPressButtonPractice, onPressOpenModal, onPressButtonEdit, ...rest }: Props) {
  const [counter, setCounter] = useState(Number);

  async function fetchCountCards() {
    try {
      const deckRef = firestore().collection('Decks').doc(contadorFlashcard);
      const documentSnapshot = await deckRef.get();
  
      if (documentSnapshot.exists) {
        const deckData = documentSnapshot.data();
        if (deckData) {
          let totalMaps = 0;
          Object.values(deckData).forEach(value => {
            if (typeof value === 'object' && value !== null) {
              totalMaps++;
            }
          });
          
          console.log(contadorFlashcard);
          console.log(totalMaps);
          setCounter(totalMaps); // Atualizar o estado do contador com o total de subdocumentos
        }
      }
    } catch (error) {
      console.error('Erro ao consultar flashcards: ', error);
    } 
  }
  
  useFocusEffect(useCallback(() => {
    fetchCountCards()
  }, []))
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
      <ContadorFlascard>{counter}</ContadorFlascard>
      <TextTitle>
        {textTitle}
      </TextTitle>

      <ButtonCreate
        onPressButtonCreate={onPressButtonCreate}
        onPressButtonEdit={onPressButtonEdit}
        onPressButtonPratice={onPressButtonPractice}
      />

    </Container>
  );
}