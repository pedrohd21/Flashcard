import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Alert, Dimensions, FlatList, ImageBackground, TouchableOpacityProps, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { PracticeComponente } from "../../components/PracticeComponente";

import { ListEmpty } from "../../components/List/ListEmpty";
import { ButtonIconBig } from "../../components/Button/ButtonIconBig";
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import { Loading } from "../../components/Loading";

type RouteParams = {
  deckName: string;
}

enum Dificuldade {
  EASY = 'EASY',
  GOOD = 'GOOD',
  HARD = 'HARD',
  VERYHARD = 'VERYHARD'
}

interface Flashcard {
  nameCard: string;
  front: string;
  back: string;
  lastReviewDate: Date;
}

export function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [filteredFlashcards, setFilteredFlashcards] = useState<Flashcard[]>([]);

  const { width } = Dimensions.get('window');

  const navigation = useNavigation();
  const route = useRoute();

  const { deckName } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchflashcardByDeck() {
    try {
      setIsLoading(true);
      const currentUser = auth().currentUser;
      const deckRef = firestore().collection('Users').doc(String(currentUser?.uid)).collection('Flashcards').doc(deckName);
      const documentSnapshot = await deckRef.get();

      if (documentSnapshot.exists) {
        const deckData = documentSnapshot.data();
        if (deckData) {
          const flashcards: Flashcard[] = [];
          Object.keys(deckData).forEach(key => {
            if (key.startsWith('card')) {
              const flashcardData = deckData[key];
              ;
              const lastReviewDate = new Date(flashcardData.lastReviewDate.seconds * 1000); // Última revisão

              const flashcard: Flashcard = {
                nameCard: key,
                front: flashcardData.front,
                back: flashcardData.back,
                lastReviewDate: lastReviewDate
              };
              flashcards.push(flashcard);
            }
          });
          setFlashcards(flashcards);
          updateFilteredFlashcards(flashcards)
          showNextItem();
        }
      } else {
        setFlashcards([]);
        
      }
    } catch (error) {
      console.error('Erro ao consultar flashcards: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleReview(dificuldade: Dificuldade, nameCard: string) {
    const proximaRevisao = calcularProximaRevisao(dificuldade);
    const currentUser = auth().currentUser;
    const deckRef = firestore().collection('Users').doc(String(currentUser?.uid)).collection('Flashcards').doc(deckName);

    const deckSnapshot = await deckRef.get();
    if (!deckSnapshot.exists) {
      console.error('Deck não encontrado');
      return;
    }
    await deckRef.set(
      {
        [nameCard]: {
          lastReviewDate: proximaRevisao
        }
      },
      { merge: true }
    ).then(() => {
      showNextItem(dificuldade, nameCard);
    });

  }

  function obterIntervaloParaDificuldade(dificuldade: Dificuldade): number {
    switch (dificuldade) {
      case Dificuldade.EASY:
        return 1 * 24 * 60 * 60 * 1000;
      case Dificuldade.GOOD:
        return 40 * 60 * 1000;
      case Dificuldade.HARD:
        return 10 * 60 * 1000;
      case Dificuldade.VERYHARD:
        return 2 * 60 * 1000;
      default:
        throw new Error("Dificuldade inválida");
    }
  }

  function calcularProximaRevisao(dificuldade: Dificuldade): Date {
    const intervalo: number = obterIntervaloParaDificuldade(dificuldade);
    const agora = new Date();
    const proximaRevisao = new Date(agora.getTime() + intervalo);
    return proximaRevisao;
  }

  async function showNextItem(dificuldade?: Dificuldade, nameCard?: string) {
    if (dificuldade === Dificuldade.EASY) {
      setFilteredFlashcards(prevFilteredFlashcards =>
        prevFilteredFlashcards.filter(flashcard => flashcard.nameCard !== nameCard)
      );
    }

    setFilteredFlashcards(prevFilteredFlashcards => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= prevFilteredFlashcards.length) {
        setCurrentIndex(0);
        if (flatListRef.current && prevFilteredFlashcards.length > 0) {
          flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
      } else {
        setCurrentIndex(nextIndex);
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
        }
      }

      if (prevFilteredFlashcards.length === 0) {
        Alert.alert('Revisão concluída', 'Você revisou todos os flashcards disponíveis para hoje!');
        handleGoBack();
      }
      return prevFilteredFlashcards;
    });
  }

  function addFlashcard() {
    navigation.navigate('CreateFlashCard', { deckName });
    fetchflashcardByDeck()
  }

  useFocusEffect(useCallback(() => {
    fetchflashcardByDeck();
  }, []));

  function updateFilteredFlashcards(flashcards: Flashcard[]) {
    const today = new Date().toDateString();
    const filtered = flashcards.filter(flashcard => {
      const flashcardDate = new Date(flashcard.lastReviewDate).toDateString();
      return flashcardDate === today || new Date(flashcard.lastReviewDate) < new Date();
    });
    setFilteredFlashcards(filtered);
  }

  return (
    <ImageBackground source={require('../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container>
        <Header
          title='Flashcard'
          showButtonRight={false}
          iconNameRight='ellipsis-v'
          showBackButton={true}
          onPressButtonLeft={handleGoBack}
        />
        {isLoading ? <Loading /> :
          <FlatList
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            data={filteredFlashcards}
            renderItem={({ item }) => (
              <View style={{ width }}>
                <PracticeComponente
                  textFront={item.front}
                  textBack={item.back}
                  showFlashcard={false}
                  buttonRepeat={() => handleReview(Dificuldade.VERYHARD, item.nameCard)}
                  buttonHard={() => handleReview(Dificuldade.HARD, item.nameCard)}
                  buttonGood={() => handleReview(Dificuldade.GOOD, item.nameCard)}
                  buttonEasy={() => handleReview(Dificuldade.EASY, item.nameCard)}
                />
              </View>
            )}
            keyExtractor={(item) => item.key}

          />
        }
        {flashcards.length <= 0 && (
          <View>
            <View style={{ bottom: 300 }}>
              <ListEmpty message="Vamos lá! Crie seu primeiro flashcard agora mesmo." />
            </View>
            <ButtonIconBig
              iconName="plus"
              onPress={() => addFlashcard()}
              style={{
                position: "absolute",
                bottom: 30
              }}
            />
          </View>
        )}
      </Container>
    </ImageBackground>
  )
}