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
  firstReviewDate: Date;
  lastReviewDate: Date;
  daysSinceFirstReview: number;
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

              const lastReviewDate = new Date(flashcardData.lastReviewDate.seconds * 1000);
              const firstReviewDate = new Date(flashcardData.lastReviewDate.seconds * 1000);

              const now = new Date();
              const nowInMilliseconds = now.getTime();
              const differenceInMilliseconds = nowInMilliseconds - firstReviewDate.getTime();
              const daysSinceFirstReview = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

              const flashcard: Flashcard = {
                nameCard: key,
                front: flashcardData.front,
                back: flashcardData.back,
                firstReviewDate: firstReviewDate,
                lastReviewDate: lastReviewDate,
                daysSinceFirstReview: daysSinceFirstReview + 1,
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

  async function handleReview(dificuldade: Dificuldade, nameCard: string, daysSinceFirstReview: number) {
    const proximaRevisao = calcularProximaRevisao(dificuldade, daysSinceFirstReview);
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
          lastReviewDate: proximaRevisao,
        }
      },
      { merge: true }
    ).then(() => {
      showNextItem(dificuldade, nameCard);
    });

  }

  function obterIntervaloParaDificuldade(dificuldade: Dificuldade, daysSinceFirstReview: number): number {
    switch (dificuldade) {
      case Dificuldade.EASY:
        return 1 * 24 * 60 * 60 * 1000 * (daysSinceFirstReview + 1);
      case Dificuldade.GOOD:
        return 40 * 60 * 1000 * (daysSinceFirstReview + 1);
      case Dificuldade.HARD:
        return 10 * 60 * 1000 * (daysSinceFirstReview + 1);
      case Dificuldade.VERYHARD:
        return 2 * 60 * 1000 * (daysSinceFirstReview + 1);
      default:
        throw new Error("Dificuldade inválida");
    }
  }

  function calcularProximaRevisao(dificuldade: Dificuldade, daysSinceFirstReview: number): Date {
    const intervalo: number = obterIntervaloParaDificuldade(dificuldade, daysSinceFirstReview);
    const agora = new Date();
    console.log('intervalo')
    console.log(intervalo)
    const proximaRevisao = new Date(agora.getTime() + intervalo);
    return proximaRevisao;
  }

  async function showNextItem(dificuldade?: Dificuldade, nameCard?: string) {
    setFilteredFlashcards(prevFilteredFlashcards => {
      let sortedFlashcards = [...prevFilteredFlashcards].sort((a, b) => a.lastReviewDate.getTime() - b.lastReviewDate.getTime());

      let updatedFlashcards = sortedFlashcards;

      if (dificuldade === Dificuldade.EASY) {
        updatedFlashcards = sortedFlashcards.filter(flashcard => flashcard.nameCard !== nameCard);
      }

      const nextIndex = currentIndex + 1;
      if (flatListRef.current) {
        if (nextIndex < updatedFlashcards.length) {
          setCurrentIndex(nextIndex);
          flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
        } else {
          setCurrentIndex(0);
          flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        }
      }

      if (updatedFlashcards.length === 0) {
        Alert.alert('Revisão concluída', 'Você revisou todos os flashcards disponíveis para hoje!');
        handleGoBack();
      }

      return updatedFlashcards;
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
                  buttonRepeat={() => handleReview(Dificuldade.VERYHARD, item.nameCard, item.daysSinceFirstReview)}
                  buttonHard={() => handleReview(Dificuldade.HARD, item.nameCard, item.daysSinceFirstReview)}
                  buttonGood={() => handleReview(Dificuldade.GOOD, item.nameCard, item.daysSinceFirstReview)}
                  buttonEasy={() => handleReview(Dificuldade.EASY, item.nameCard, item.daysSinceFirstReview)}
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