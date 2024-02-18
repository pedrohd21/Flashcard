import React, { useRef, useState } from "react";
import { Container, ContainerButtonOption, ButtonOption, ButtonShow, Icon, Text } from "./styles";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Dimensions, FlatList, TouchableOpacityProps, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { PracticeComponente } from "../../components/PracticeComponente";
import theme from "../../theme";

export function Practice() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);


  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const data = [
    {
      key: '1', textFront: 'amar',
      textBack: 'love'
    },
    {
      key: '2', textFront: 'a',
      textBack: 'a'
    },
    {
      key: '3', textFront: 'b',
      textBack: 'b'
    },
  ]
  const { width } = Dimensions.get('window');

  function showNextItem() {
    const nextIndex = currentIndex + 1;
    if (flatListRef.current && nextIndex < data.length) {
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex }); 
    }
  };

  return (
    <Container>
      <Header
        title='Flashcard'
        showButtonRight={true}
        showBackButton={true}
        onPressButtonLeft={handleGoBack}
        iconNameRight='ellipsis-v'
      />

      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        data={data}
        renderItem={({ item, index }) => (
          <View style={{ width }}>
            {index === currentIndex && ( 
              <PracticeComponente
                textFront={item.textFront}
                textBack={item.textBack}
                showFlashcard={showAnswer}
              />
            )}
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
      {!showAnswer &&
        (
          <ContainerButtonOption>
            <ButtonShow hitSlop={20} onPress={() => setShowAnswer(true)}>
              <Text>Mostrar Resposta</Text>
              <Icon
                name='eye'
                color={theme.COLORS.BLUE}
                size={20}

              />
            </ButtonShow>
          </ContainerButtonOption>
        )}
      {showAnswer &&
        (
          <ContainerButtonOption>
            {/* refator isso, criar um componete unico, e personalizado */}
            {currentIndex < data.length - 1 && (
              <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.RED }} onPress={() => showNextItem()}>
                <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.RED }}>&lt; 1m</Text>
                <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.RED }}>Repetir</Text>
              </ButtonOption>
            )}
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.WHITE }} onPress={() => { }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.WHITE }}>&lt; 10m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.WHITE }}>Dificil</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.GREEN }} onPress={() => { }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.GREEN }}>&lt; 60m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.GREEN }}>Bom</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.BLUE }} onPress={() => { }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.BLUE }}>&lt; 1d</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.BLUE }}>Facil</Text>

            </ButtonOption>
          </ContainerButtonOption>
        )}
    </Container>
  )
}