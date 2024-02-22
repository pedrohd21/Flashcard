import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Alert, FlatList, ImageBackground, Modal } from "react-native";
import { FlascardGetByDeck } from "../../../storage/flashcard/FlascardGetByDeck";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { FlashcardStorageDTO } from "../../../storage/flashcard/FlashcardStorageDTO";
import { Loading } from "../../../components/Loading";
import { ListFlashcardsCard } from "../../../components/List/ListFlashcardsCard";
import { FlashcardRemoveDeck } from "../../../storage/flashcard/flashcardRemoveDeck";
import { SearchFlashcard } from "../../../components/Search/SearchFlashcard";
import { ButtonIconBig } from "../../../components/Button/ButtonIconBig";
import theme from "../../../theme";
import { ListEmpty } from "../../../components/List/ListEmpty";

type RouteParams = {
  deckName: string;
}

export function ListFlashCard() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);

  const [flashcards, setFlashcards] = useState<FlashcardStorageDTO[]>([]);

  const { deckName } = route.params as RouteParams;
  const [searchText, setSearchText] = useState('');

  const clearSearchText = () => {
    setSearchText('');
  };

  async function fetchflashcardByDeck() {
    setIsLoading(true);
    try {

      const flashcardByDeck = await FlascardGetByDeck(deckName);
      setFlashcards(flashcardByDeck)
    } catch (error) {
      Alert.alert('Flashcard', 'Não foi possível carregar os flashcards.');
    } finally {

    }
    setIsLoading(false);
  }

  function addFlashcard() {
    navigation.navigate('CreateFlashCard', { deckName });
    fetchflashcardByDeck()
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handledeckFlashcardRemove(front: string, back: string) {
    try {
      await FlashcardRemoveDeck(front, back, deckName);

      fetchflashcardByDeck()

    } catch (error) {
      console.log(error);

      Alert.alert('Remover Flashcard', 'Não foi possível remover flashcard.');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchflashcardByDeck();
    console.log(searchText)
  }, []));

  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{flex: 1}}>
      <Container>
        <Header
          title={deckName}
          showBackButton={true}
          onPressButtonRight={() => { }}
          showButtonRight={true}
          iconNameRight="plus"
          onPressButtonLeft={handleGoBack}
          style={{ marginBottom: 20 }}
        />
        <SearchFlashcard
          valueCleanText={searchText}
          onChangeNameDeck={(text) => setSearchText(text)}
          clearText={clearSearchText}
        />
        {isLoading ? <Loading /> :
          <FlatList
            data={flashcards.filter(item =>
              item.front.toLowerCase().includes(searchText.toLowerCase()) ||
              item.back.toLowerCase().includes(searchText.toLowerCase())
            )}
            renderItem={({ item }) => (
              <ListFlashcardsCard
                textFront={item.front}
                textBack={item.back}
                deleteFlashcard={() => handledeckFlashcardRemove(item.front, item.back)}
                editFlashcard={() => { }}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Crie seu primeiro Flashcard!" />
            )}
          />
        }
        {flashcards.length <= 0 && (
          <ButtonIconBig
            iconName="plus"
            onPress={addFlashcard}
            style={{
              position: "absolute",
              bottom: 30
            }}
          />
        )}
      </Container>
    </ImageBackground>
  )
}