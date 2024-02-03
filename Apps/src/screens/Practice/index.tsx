import React, { useState } from "react";
import { Container, QuestionFlashcard, AnswerFlashcard, Text, ContainerQuestionAnswer, ButtonShow, Icon } from "./styles";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CreateFlashcardCard } from "../../components/Card/CreateFlashcardCard";
import theme from "../../theme";
import { PracticeComponente } from "../../components/Practice";

export function Practice() {
  const [showAnswer, setShowAnswer] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const data = [
    { key: '1', textFront: '', textBack: '' },

  ]

  return (
    <Container>
      <Header
        title='Flashcard'
        showButtonRight={true}
        showBackButton={true}
        onPressButtonLeft={handleGoBack}
        iconNameRight='ellipsis-v'
      />

      {/* <FlatList
        data={data}
        renderItem={({ item }) => (


        )}
      /> */}

      <PracticeComponente/>
    </Container>
  )
}