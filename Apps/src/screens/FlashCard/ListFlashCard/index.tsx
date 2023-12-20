import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Alert, FlatList } from "react-native";
import { FlascardGetByDeck } from "../../../storage/flashcard/FlascardGetByDeck";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { FlashcardStorageDTO } from "../../../storage/flashcard/FlashcardStorageDTO";
import { Loading } from "../../../components/Loading";
import { ListFlashcardsCard } from "../../../components/List/ListFlashcardsCard";
import { FlashcardRemoveDeck } from "../../../storage/flashcard/flashcardRemoveDeck";

type RouteParams = {
  deckName: string;
}

export function ListFlashCard() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);

  const [flashcards, setFlashcards] = useState<FlashcardStorageDTO[]>([]);

  const { deckName } = route.params as RouteParams;

  async function fetchflashcardByDeck() {
    try {
      setIsLoading(true);
      const flashcardByDeck = await FlascardGetByDeck(deckName);
      setFlashcards(flashcardByDeck)
    } catch (error) {
      Alert.alert('Flashcard', 'Não foi possível carregar os flashcards.');
    } finally {
      setIsLoading(false);
    }
  }

  function addFlashcard() {
    navigation.navigate('CreateFlashCard', { deckName });
    fetchflashcardByDeck()
  }

  function handleGoBack() {
    navigation.goBack();
  }


  async function handledeckRemove(front: string, back: string) {
    try {
      console.log(front, back, deckName)
      await FlashcardRemoveDeck(front, back, deckName);

      fetchflashcardByDeck()

    } catch (error) {
      console.log(error);

      Alert.alert('Remover Flashcard', 'Não foi possível remover flashcard.');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchflashcardByDeck();
  }, []));

  // useEffect(() => {
  //   fetchflashcardByDeck();
  // }, [deckName]);

  return (
    <Container>
      <Header
        title={deckName}
        showButtonRight={true}
        showBackButton={true}
        iconNameRight='plus'
        onPressButtonRight={addFlashcard}
        onPressButtonLeft={handleGoBack}
        style={{ marginBottom: 20 }}
      />

      {isLoading ? <Loading /> :
        <FlatList
          data={flashcards}
          renderItem={({ item }) => (
            <ListFlashcardsCard
              textFront={item.front}
              textBack={item.back}
              deleteFlashcard={() => handledeckRemove(item.front, item.back)}
              editFlashcard={() => { }}
            />
          )}
        />
      }
    </Container>
  )
}