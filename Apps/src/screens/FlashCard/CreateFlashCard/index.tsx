import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ButtonIconBig } from "../../../components/Botton/ButtonIconBig";
import { flashcardAddDeck } from "../../../storage/flashcard/flashcardAddDeck";
import { FlashcardStorageDTO } from "../../../storage/flashcard/FlashcardStorageDTO";

type RouteParams = {
  deckName: string;
}

export function CreateFlashCard() {
  const [newFlashcardFront, setNewFlashcardFront] = useState('');
  const [newFlashcardBack, setNewFlashcardBack] = useState('');

  const newTextFrontInputRef = useRef<TextInput>(null);
  const newTextBackInputRef = useRef<TextInput>(null);

  const route = useRoute();
  const { deckName } = route.params as RouteParams;

  async function addFlashcard() {
    if (newFlashcardFront.trim().length === 0) {
      return Alert.alert('Novo Flashcard', 'Adicione algo no flascard.');
    }

    const newFlashcard: FlashcardStorageDTO = {
      front: newFlashcardFront,
      back: newFlashcardBack,
    }

    try {
      await flashcardAddDeck(newFlashcard, deckName);
      newTextFrontInputRef.current?.blur();
      newTextBackInputRef.current?.blur();
      setNewFlashcardFront('');
      setNewFlashcardBack('');
      
      // FlascardGetByDeck()
    } catch (error: any) {
      if (error) {
        Alert.alert('Novo Flashcard', error.message);
      } else {
        Alert.alert('Novo Flashcard', 'Não foi possível adicionar.');
      }
    }
  }

  return (
    <Container>
      <Header
        title='Create Flashcards'
        showBackButton={true}
        onPressButtonRight={addFlashcard}
      />

      <Title
        mainTitle="Deck"
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
  );
}