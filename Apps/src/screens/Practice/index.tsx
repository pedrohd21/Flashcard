import React, { useCallback, useRef, useState } from "react";
import { Container, ContainerButtonOption, ButtonOption, ButtonShow, Icon, Text } from "./styles";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Alert, Dimensions, FlatList, ImageBackground, TouchableOpacityProps, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { PracticeComponente } from "../../components/PracticeComponente";
import theme from "../../theme";

import { ListEmpty } from "../../components/List/ListEmpty";
import { ButtonIconBig } from "../../components/Button/ButtonIconBig";

type RouteParams = {
  deckName: string;
}

export function Practice() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [flashcards, setFlashcards] = useState<FlashcardStorageDTO[]>([]);

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
      // const flashcardByDeck = await FlascardGetByDeck(deckName);
      // setFlashcards(flashcardByDeck)
    } catch (error) {
      Alert.alert('Flashcard', 'Não foi possível carregar os flashcards.');
    } finally {
      setIsLoading(false);
    }
  }
  function buttonRepeatFlashcard() {
    // showNextItem()
    setShowAnswer(false)
  }

  // function showNextItem() {
  //   const nextIndex = currentIndex + 1;
  //   if (flatListRef.current && nextIndex < flashcards.length) {
  //     setCurrentIndex(nextIndex);
  //     flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
  //   }
  // };

  function addFlashcard() {
    navigation.navigate('CreateFlashCard', { deckName });
    fetchflashcardByDeck()
  }

  useFocusEffect(useCallback(() => {
    fetchflashcardByDeck();
  }, []));

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

        {/* <FlatList
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          data={flashcards}
          renderItem={({ item, index }) => (
            <View style={{ width }}>
              {index === currentIndex && (
                <PracticeComponente
                  textFront={item.front}
                  textBack={item.back}
                  showFlashcard={showAnswer}
                  buttonRepeat={() => buttonRepeatFlashcard()}
                />
              )}

            </View>
          )}
          keyExtractor={(item) => item.key}

        />
        {flashcards.length <= 0 && (
          <View>
            <View style={{bottom: 300}}>
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
        )} */}
      </Container>
    </ImageBackground>
  )
}