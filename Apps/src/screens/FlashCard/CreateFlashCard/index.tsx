import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { Alert, FlatList, ImageBackground, Keyboard, TextInput } from "react-native";
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import { ButtonIconBig } from "../../../components/Button/ButtonIconBig";
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

  const navigation = useNavigation();
  const route = useRoute();
  const { deckName } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);


  async function addFlashcard() {
    setIsLoading(true);
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

    } catch (error: any) {
      if (error) {
        Alert.alert('Novo Flashcard', error.message);
      } else {
        Alert.alert('Novo Flashcard', 'Não foi possível adicionar.');
      }
    }
    setIsLoading(true);
  }

  function handleGoBack() {
    if (newFlashcardFront.trim().length === 0) {
      navigation.goBack();
    } else {
      Alert.alert(
        'Salvar Flashcard',
        'Tem certeza que deseja não salvar este flashcard?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Sim',
            style: 'destructive',
            onPress: async () => {
              try {
                navigation.goBack();
              } catch (error) {
                console.log(error);
  
                Alert.alert('Salvar Flashcard', 'Não foi possível salvar flashcard.');
              }
            },
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