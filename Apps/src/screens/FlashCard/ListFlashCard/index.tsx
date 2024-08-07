import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Alert, FlatList, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Loading } from "../../../components/Loading";
import { ListFlashcardsCard } from "../../../components/List/ListFlashcardsCard";
import { SearchFlashcard } from "../../../components/Search/SearchFlashcard";
import { ButtonIconBig } from "../../../components/Button/ButtonIconBig";
import { ListEmpty } from "../../../components/List/ListEmpty";
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import theme from "../../../theme";

type RouteParams = {
  deckName: string;
}

interface Flashcard {
  nameCard: string;
  front: string;
  back: string;
  lastReviewDate: Date;
}

export function ListFlashCard() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [flashcardsData, setFlashcardsData] = useState<Flashcard[]>([]);
  const [filteredFlashcards, setFilteredFlashcards] = useState<Flashcard[]>([]);

  const { deckName } = route.params as RouteParams;
  const [deckNameFirestore, setDeckNameFirestore] = useState<string>('');

  const [searchText, setSearchText] = useState('');

  const clearSearchText = () => {
    setSearchText('');
  };

  async function fetchflashcardByDeck() {
    try {
      setIsLoading(true);
      const currentUser = auth().currentUser;
      setDeckNameFirestore(String(currentUser?.uid))

      const deckRef = firestore().collection('Users').doc(String(currentUser?.uid)).collection('Flashcards');
      const documentSnapshot = await deckRef.doc(deckName).get();


      if (currentUser) {
        const deckData = documentSnapshot.data();
        console.log(deckData)
        if (deckData) {
          const flashcards: Flashcard[] = [];

          Object.keys(deckData).forEach(key => {
            if (key.startsWith('card')) {
              const flashcardData = deckData[key];
              const lastReviewDate = new Date(flashcardData.lastReviewDate.seconds * 1000);
              const flashcard: Flashcard = {
                nameCard: key,
                front: flashcardData.front,
                back: flashcardData.back,
                lastReviewDate: lastReviewDate,

              };
              flashcards.push(flashcard);
            }
          });
          setFlashcardsData(flashcards);
          updateFilteredFlashcards(flashcards)
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
  }
  function editFlashcard(deckName: any, nameCard: string) {
    navigation.navigate('EditFlashCard', { deckName, nameCard });
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

              const deckRef = firestore().collection('Users').doc(deckNameFirestore).collection('Flashcards').doc(deckName);

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

  function verificationFlashcards() {
    if (!isLoading && filteredFlashcards.length === 0) {
      Alert.alert(
        "Revisão concluída",
        "Você revisou todos os flashcards disponíveis para hoje!"
      );

    } else {
      navigation.navigate('Practice', { deckName })
    }
  }

  function updateFilteredFlashcards(flashcards: Flashcard[]) {
    const today = new Date().toDateString();

    const filteredFlashcards = flashcards
      .filter(flashcard => {
        const flashcardDate = new Date(flashcard.lastReviewDate).toDateString();
        return flashcardDate === today || new Date(flashcard.lastReviewDate) < new Date();
      })

    setFilteredFlashcards(filteredFlashcards);
  }

  useFocusEffect(useCallback(() => {
    fetchflashcardByDeck();
  }, []));

  return (
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
              editFlashcard={() => { editFlashcard(deckName, item.nameCard) }
              } />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal darmos início à sua jornada de aprendizado criando o seu primeiro flashcard agora mesmo?" />
          )}
        />
      }

      {
        flashcardsData.length <= 0 ? (
          <ButtonIconBig
            iconName="plus"
            onPress={addFlashcard}
            style={{
              position: "absolute",
              bottom: 30
            }}
          />
        ) : (
          <View style={{ height: 60, justifyContent: 'center' }}>
            <ButtonIconBig
              iconName="book-reader"
              text="Praticar"
              onPress={verificationFlashcards}
              style={{
                // position: "absolute",
                bottom: 0,
                width: '60%',
              }}
            />
          </View>
        )
      }

    </Container>
  )
}