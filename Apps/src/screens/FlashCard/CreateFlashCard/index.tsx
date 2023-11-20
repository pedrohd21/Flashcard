import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { FlatList, Keyboard } from "react-native";
import { ButtonIconBig } from "../../../components/ButtonIconBig";


export function CreateFlashCard() {
  const [flashcards, setFlashcards] = useState([
    { id: 0, textFront: '', textBack: '' },
  ]);
  const flatListRef = useRef<FlatList | null>(null);
  const [nextCardKey, setNextCardKey] = useState(1);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  async function addFlashcard() {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true, });
    }
    setNextCardKey(nextCardKey + 1);
    setFlashcards([...flashcards, { id: nextCardKey, textFront: '', textBack: '' }]);
    console.log(flashcards)

  }

  async function removeFlashcard(id: number) {
    console.log({flashcards})
    const newFlashcards = flashcards.filter(flashcard => flashcard.id !== id);
    setFlashcards(newFlashcards);
    console.log({flashcards})

  }

  function salvaFlashcard() {
    console.log({ ...flashcards })
  }

  function handleTextChange(index: number, field: 'textFront' | 'textBack', value: string) {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);

  }

  useEffect(() => {
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });
    console.log(flashcards)
    return () => {
      hideSubscription.remove();
    };
    
  }, [[flashcards]]);


  return (
    <Container>
      <Header
        title='Create Flashcard'
        showButtonRight={true}
        showBackButton={true}
        iconNameRight='check'
        onPressButtonRight={salvaFlashcard}
      />

      <Title
        mainTitle="Titles"
        subTitle=''
      />

      <FlatList
        ref={flatListRef}
        data={flashcards}
        renderItem={({ item, index }) => (
          <CreateFlashcardCard
            textFront={item.textFront}
            textBack={item.textBack}
            onPressButton={() => (removeFlashcard(item.id))}
            onChangeTextFront={(value) => handleTextChange(index, 'textFront', value)}
            onChangeTextBack={(value) => handleTextChange(index, 'textBack', value)}
          />
        )}

      />

      {isKeyboardVisible ? null : (
        <ButtonIconBig
          iconName="plus"
          onPress={addFlashcard}
        />
      )}
    </Container>
  );
}