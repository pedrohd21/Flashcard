import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreatFlashcardCard } from "../../../components/Card/CreatFlashcardCard";
import { FlatList, Keyboard } from "react-native";
import { ButtonIconBig } from "../../../components/ButtonIconBig";

export function CreateFlashCard() {
  const [flashcards, setFlashcards] = useState([
    { key: '', textFront: '', textBack: '' },
  ]);
  const flatListRef = useRef<FlatList | null>(null);
  const [nextCardKey, setNextCardKey] = useState(1);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);


  function addFlashcard() {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true, }); // Você pode especificar 'animated' como verdadeiro ou falso
    }
    const newCard = {
      key: nextCardKey.toString(),
      textFront: '',
      textBack: '',
    };

    setFlashcards([...flashcards, newCard]);
    setNextCardKey(nextCardKey + 1); // Atualiza a próxima chave

  }

  function removeFlashcard() {

  }

  function salvaFlashcard() {

  }

  useEffect(() => {
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });
    
    return () => {
      hideSubscription.remove();
    };
  }, []);

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
        subTitle="Title Flashcard"
      />

      <FlatList
        ref={flatListRef}
        data={flashcards}
        renderItem={({ item }) => (
          <CreatFlashcardCard
            textFront={item.textFront}
            textBack={item.textBack}
            onPressButton={removeFlashcard}
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