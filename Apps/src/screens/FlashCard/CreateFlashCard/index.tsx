import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { DecksGetAll } from '../../../storage/deck/decksGetAll';
import { ButtonIconBig } from "../../../components/ButtonIconBig";
import { flashcardAddDeck } from "../../../storage/flashcard/flashcardAddDeck";

type RouteParams = {
  deck: string;
}

export function CreateFlashCard() {
  const [newFlashcardFront, setNewFlashcardFront] = useState('');
  const [newFlashcardBack, setNewFlashcardBack] = useState('');

  const newTextFrontInputRef = useRef<TextInput>(null);
  const newTextBackInputRef = useRef<TextInput>(null);

  const route = useRoute();
  const { deck } = route.params as RouteParams;

  async function addFlashcard() {
    if (newFlashcardFront.trim().length === 0) {
      return Alert.alert('Novo Flashcard', 'Adicione algo no flascard.');
    }

    const newFlashcard = {
      front: newFlashcardFront,
      back: newFlashcardBack,
    }

    try {
      await flashcardAddDeck(newFlashcard, deck);

      newTextFrontInputRef.current?.blur();
      newTextBackInputRef.current?.blur();
      console.log(newFlashcard)
      setNewFlashcardFront('');
      setNewFlashcardBack('');
      
      // fetchPlayersByTeam();
    } catch (error: any) {
      if (error) {
        Alert.alert('Novo Flashcard', error.message);
      } else {
        console.log(error);
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
        subTitle='Vocabulario'
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