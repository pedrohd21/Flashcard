import React, { useState } from "react";
import { Container, QuestionFlashcard, AnswerFlashcard, ContainerQuestionAnswer, ContainerButtonOption, ButtonOption, Text, ButtonShow, Icon } from "./styles";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import theme from "../../theme";

export function PracticeComponente() {
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
      <ContainerQuestionAnswer>
        <QuestionFlashcard>
          <Text>Gramática: Verbos </Text>
        </QuestionFlashcard>

        {!showAnswer && (
          <AnswerFlashcard>
            <Text>sdsdd</Text>
          </AnswerFlashcard>
        )}
      </ContainerQuestionAnswer>
      {showAnswer &&
        (
          <ButtonShow hitSlop={20}>
            <Text>Mostrar Resposta</Text>
            <Icon
              name='eye'
              color={theme.COLORS.BLUE}
              size={20}
              onPress={() => { }}
            />
          </ButtonShow>
        )}
      {!showAnswer &&
        (
          <ContainerButtonOption>
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.RED }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.RED }}>&lt; 1m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.RED }}>Repetir</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.WHITE }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.WHITE }}>&lt; 10m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.WHITE }}>Dificil</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.GREEN }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.GREEN }}>&lt; 60m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.GREEN }}>Bom</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.BLUE }}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.BLUE }}>&lt; 1d</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.BLUE }}>Facil</Text>

            </ButtonOption>
          </ContainerButtonOption>
        )}
    </Container>
  )
}