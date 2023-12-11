import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { FlatList } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { DecksGetAll } from '../../../storage/deck/decksGetAll';

type RouteParams = {
  deck: string;
}

export function CreateFlashCard() {
  const [flashcards, setFlashcards] = useState([
    { id: 0, textFront: '', textBack: '' },
  ]);
  const flatListRef = useRef<FlatList | null>(null);
  const [nextCardKey, setNextCardKey] = useState(1);

  const route = useRoute();
  const { deck } = route.params as RouteParams;

  function addFlashcard() {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true, });
    }
    setNextCardKey(nextCardKey + 1);
    setFlashcards([...flashcards, { id: nextCardKey, textFront: '', textBack: '' }]);
  }

  function removeFlashcard(id: number) {
    const newFlashcards = flashcards.filter(flashcard => flashcard.id !== id);
    setFlashcards(newFlashcards);
  }

  async function salvaFlashcard() {
    
    const data = await DecksGetAll();
    console.log( data )
  }

  function handleTextChange(index: number, field: 'textFront' | 'textBack', value: string) {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
    console.log(updatedFlashcards)

  }

  return (
    <Container>
      <Header
        title='Create Flashcards'
        showButtonRight={true}
        showBackButton={true}
        iconNameRight='check'
        onPressButtonRight={salvaFlashcard}
      />

      <Title
        mainTitle="Deck"
        subTitle='Vocabulario'
      />

      <CreateFlashcardCard
        onChangeTextBack={() => { }}
        onChangeTextFront={() => { }}
        textBack=""
        textFront=""
      />
    </Container>
  );
}