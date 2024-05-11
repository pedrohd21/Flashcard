import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { Alert, FlatList, ImageBackground, Keyboard, TextInput } from "react-native";
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import { ButtonIconBig } from "../../../components/Button/ButtonIconBig";
import firestore from '@react-native-firebase/firestore';


type RouteParams = {
  deckName: string;
}

export function CreateFlashCard() {
  const [newFlashcardFront, setNewFlashcardFront] = useState('');
  const [newFlashcardBack, setNewFlashcardBack] = useState('');

  const newTextFrontInputRef = useRef<TextInput>(null);
  const newTextBackInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const route = useRoute();
  const { deckName } = route.params as RouteParams;

  async function addFlashcard() {

    if (newFlashcardFront.trim().length === 0) {
      Alert.alert('Novo Flashcard', 'Por favor, adicione conteúdo ao flashcard antes de salvar.');
    } else {
      try {
        // Consulta o deck para obter o número atual de cartões
        const deckRef = firestore().collection('Decks').doc(deckName);
        const deckSnapshot = await deckRef.get();

        if (!deckSnapshot.exists) {
          console.error('Deck não encontrado');
          return;
        }

        const deckData = deckSnapshot.data();
        const currentCardCount = deckData ? Object.keys(deckData).length : 0;

        // Cria um novo cartão com o número apropriado
        const newCardName = `card${currentCardCount}`;

        // Adiciona o novo flashcard ao deck
        await deckRef.update({
          [newCardName]: {
            front: newFlashcardFront,
            back: newFlashcardBack,
            minute: 1
          }
        });

        newTextFrontInputRef.current?.blur();
        newTextBackInputRef.current?.blur();
        setNewFlashcardFront('');
        setNewFlashcardBack('');

      } catch (error: any) {
        Alert.alert('Erro', 'Ocorreu um erro ao adicionar o flashcard. Por favor, tente novamente mais tarde.');
      }
    }
  }

  function handleGoBack() {
    if (newFlashcardFront.trim().length === 0) {
      navigation.goBack();
    } else {
      Alert.alert(
        'Salvar Flashcard',
        'Tem certeza de que deseja descartar este flashcard não salvo?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Descartar',
            style: 'destructive',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: true }
      );
    }
  }

  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container>
        <Header
          title={deckName}
          showBackButton={true}
          onPressButtonRight={addFlashcard}
          onPressButtonLeft={handleGoBack}
        />

        <CreateFlashcardCard
          inputRefFront={newTextFrontInputRef}
          inputRefBack={newTextBackInputRef}
          onChangeTextFront={setNewFlashcardFront}
          onChangeTextBack={setNewFlashcardBack}
          onSubmitEditing={addFlashcard}
          valueTextFront={newFlashcardFront}
          valueTextBack={newFlashcardBack}

        />
        <ButtonIconBig
          onPress={addFlashcard}
          iconName="plus"
        />
      </Container>
    </ImageBackground>
  );
}