import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { ListFlashcardsCard } from "../../../components/List/ListFlashcardsCard";
import { Alert, FlatList } from "react-native";
import { FlascardGetByDeck } from "../../../storage/flashcard/FlascardGetByDeck";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlashcardStorageDTO } from "../../../storage/flashcard/FlashcardStorageDTO";
import { Loading } from "../../../components/Loading";

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
      console.log("###############")
    } catch (error) {
      Alert.alert('Flashcard', 'Não foi possível carregar os flashcards.');
    } finally {
      setIsLoading(false);
    }
  }

  function AddFlashcard() {
    navigation.navigate('CreateFlashCard', { deckName });
  }

  useEffect(() => {
    fetchflashcardByDeck();
  }, [flashcards])

  return (
    <Container>
      <Header
        title='Edit Flashcard'
        showButtonRight={true}
        showBackButton={true}
        iconNameRight='plus'
        onPressButtonRight={AddFlashcard}
      />

      <Title
        mainTitle={deckName}
      />

      {isLoading ? <Loading /> :
        <FlatList
          data={flashcards}
          renderItem={({ item }) => (
            <ListFlashcardsCard
              textFront={item.front}
              textBack={item.back}
            />
          )}
        />
      }
    </Container>
  )
}