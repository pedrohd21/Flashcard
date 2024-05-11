import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Alert, FlatList, ImageBackground, Modal } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Loading } from "../../../components/Loading";
import { ListFlashcardsCard } from "../../../components/List/ListFlashcardsCard";
import { SearchFlashcard } from "../../../components/Search/SearchFlashcard";
import { ButtonIconBig } from "../../../components/Button/ButtonIconBig";
import theme from "../../../theme";
import { ListEmpty } from "../../../components/List/ListEmpty";
import firestore from '@react-native-firebase/firestore';

type RouteParams = {
  deckName: string;
}

interface Flashcard {
  nameCard: string;
  front: string;
  back: string;
}

export function ListFlashCard() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [flashcardsData, setFlashcardsData] = useState<Flashcard[]>([]);

  const { deckName } = route.params as RouteParams;
  const [searchText, setSearchText] = useState('');

  const clearSearchText = () => {
    setSearchText('');
  };

  async function fetchflashcardByDeck() {
    try {
      setIsLoading(true);
      const deckRef = firestore().collection('Decks').doc(deckName);
      const documentSnapshot = await deckRef.get();

      if (documentSnapshot.exists) {
        const deckData = documentSnapshot.data();
        if (deckData) {
          const flashcards: Flashcard[] = [];
          Object.keys(deckData).forEach(key => {
            if (key.startsWith('card')) {
              const flashcardData = deckData[key];
              const flashcard: Flashcard = {
                nameCard: key,
                front: flashcardData.front,
                back: flashcardData.back
              };
              flashcards.push(flashcard);
            }
          });
          setFlashcardsData(flashcards);
        }
      } else {
        setFlashcardsData([]);
      }
    } catch (error) {
      console.error('Erro ao consultar flashcards: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  function addFlashcard() {
    navigation.navigate('CreateFlashCard', { deckName });
    fetchflashcardByDeck()
  }
  function editFlashcard(deckName: any, nameCard: string) {
    navigation.navigate('EditFlashCard', { deckName, nameCard });
    fetchflashcardByDeck()
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handledeckFlashcardRemove(cardId: any) {
    Alert.alert(
      'Remover Flashcard',
      'Tem certeza que deseja remover este flashCard?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: async () => {
            try {
              setIsLoading(true);

              const deckRef = firestore().collection('Decks').doc(deckName);
              const deckSnapshot = await deckRef.get();

              if (!deckSnapshot.exists) {
                console.error('Deck não encontrado');
                return;
              }

              await deckRef.update({
                [cardId]: firestore.FieldValue.delete()
              });

              fetchflashcardByDeck()
            } catch (error) {
              console.error('Erro ao remover flashcard:', error);
              Alert.alert('Remover Flashcard', 'Não foi possível remover o flashcard.');
            } finally {
              setIsLoading(false);
            }
          },
        },
      ],
      { cancelable: true }
    );
  }



  useFocusEffect(useCallback(() => {
    fetchflashcardByDeck();
  }, []));

  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container>
        <Header
          title={deckName}
          showBackButton={true}
          onPressButtonRight={addFlashcard}
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
            data={flashcardsData.filter(item =>
              item.front.toLowerCase().includes(searchText.toLowerCase()) ||
              item.back.toLowerCase().includes(searchText.toLowerCase())
            )}
            renderItem={({ item }) => (
              <ListFlashcardsCard
                textFront={item.front}
                textBack={item.back}
                deleteFlashcard={() => handledeckFlashcardRemove(item.nameCard)}
                editFlashcard={() => { editFlashcard(deckName, item.nameCard)}
                } />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Que tal darmos início à sua jornada de aprendizado criando o seu primeiro flashcard agora mesmo?" />
            )}
          />
        }
        {flashcardsData.length <= 0 && (
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