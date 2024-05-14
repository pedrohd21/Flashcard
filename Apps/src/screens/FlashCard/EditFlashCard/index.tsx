import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcardCard } from "../../../components/Card/CreateFlashcardCard";
import { Alert, ImageBackground, TextInput } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ButtonIconBig } from "../../../components/Button/ButtonIconBig";
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"

type RouteParams = {
  deckName: string;
  nameCard: string;
}

export function EditFlashCard() {
  const [newFlashcardFront, setNewFlashcardFront] = useState('');
  const [newFlashcardBack, setNewFlashcardBack] = useState('');

  const newTextFrontInputRef = useRef<TextInput>(null);
  const newTextBackInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const route = useRoute();
  const { deckName, nameCard } = route.params as RouteParams;

  async function editFlashCard() {
    if (newFlashcardFront.trim().length === 0) {
      Alert.alert('Novo Flashcard', 'Por favor, adicione conteúdo ao flashcard antes de salvar.');
    }else{
      try {
        const currentUser = auth().currentUser;
        const deckRef = firestore().collection('Users').doc(String(currentUser?.uid)).collection('Flashcards').doc(deckName);

        const deckSnapshot = await deckRef.get();
  
        if (!deckSnapshot.exists) {
          console.error('Deck não encontrado');
          return;
        }
  
        await deckRef.update({
          [`${nameCard}.front`]: newFlashcardFront,
          [`${nameCard}.back`]: newFlashcardBack,
          [`${nameCard}.minute`]: 1
        });
  
        newTextFrontInputRef.current?.blur();
        newTextBackInputRef.current?.blur();
        setNewFlashcardFront('');
        setNewFlashcardBack('');
        navigation.navigate('ListFlashCard', { deckName });
      } catch (error: any) {
        Alert.alert('Erro', 'Ocorreu um erro ao editar o flashcard. Por favor, tente novamente mais tarde.');
      }
    }
  }

  function handleGoBack() {
    if (newFlashcardFront.trim().length === 0) {
      navigation.goBack();
    } else {
      Alert.alert(
        'Salvar Flashcard',
        'Tem certeza de que deseja descartar as alterações neste flashcard?',
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
          onPressButtonLeft={handleGoBack}
        />

        <CreateFlashcardCard
          inputRefFront={newTextFrontInputRef}
          inputRefBack={newTextBackInputRef}
          onChangeTextFront={setNewFlashcardFront}
          onChangeTextBack={setNewFlashcardBack}
          onSubmitEditing={editFlashCard}
          valueTextFront={newFlashcardFront}
          valueTextBack={newFlashcardBack}

        />
        <ButtonIconBig
          onPress={editFlashCard}
          iconName="edit"
          text="Editar"
        />
      </Container>
    </ImageBackground>
  );
}