import React, { useEffect, useState } from "react";
import { Container, QuestionFlashcard, AnswerFlashcard, ContainerQuestionAnswer, Text, ContainerButtonOption, ButtonOption, ButtonShow, Icon, } from "./styles";
import { ScrollView, TouchableOpacityProps } from "react-native";

import theme from "../../theme";

type Props = TouchableOpacityProps & {
  textFront?: string;
  textBack?: string;
  showFlashcard?: boolean;
  buttonRepeat?: () => void;
  textRepeat?: number;
  buttonHard?: () => void;
  textHard?: number;
  buttonGood?: () => void;
  textGood?: number;
  buttonEasy?: () => void;
  textEasy?: number;
}

export function PracticeComponente({ textFront, textBack, showFlashcard, buttonRepeat, textRepeat, buttonHard, buttonGood, buttonEasy, ...rest }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(!!showFlashcard);
  }, [showFlashcard]);


  return (
    <Container >
      <ContainerQuestionAnswer>

        <QuestionFlashcard>
          <ScrollView>
            <Text>{textFront}</Text>
          </ScrollView>
        </QuestionFlashcard>

        {showAnswer && (
          <AnswerFlashcard>
            <ScrollView>
              <Text>{textBack}</Text>
            </ScrollView>
          </AnswerFlashcard>
        )}
      </ContainerQuestionAnswer>

      {!showAnswer &&
        (
          <ContainerButtonOption>
            <ButtonShow hitSlop={20} onPress={() => setShowAnswer(true)}>
              <Text style={{ fontFamily: 'Roboto-Bold' }}>Mostrar Resposta</Text>
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
            {/* {currentIndex < data.length - 1 && ( */}
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.RED }} onPress={() => {
              if (buttonRepeat) {
                buttonRepeat();
                setShowAnswer(false);
              }
            }}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.RED }}>Repetir</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.RED }}>hoje</Text>
            </ButtonOption>
            {/* // )} */}
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.WHITE }} onPress={() => {
              if (buttonHard) {
                buttonHard();
                setShowAnswer(false);
              }
            }}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.WHITE }}>1 dia</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.WHITE }}> Difícil</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.GREEN }} onPress={() => {
              if (buttonGood) {
                buttonGood();
                setShowAnswer(false);
              }
            }}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.GREEN }}>2 dias</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.GREEN }}>Bom</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.BLUE }} onPress={() => {
              if (buttonEasy) {
                buttonEasy();
                setShowAnswer(false);
              }
            }}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.BLUE }}>7 dias</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.BLUE }}>Fácil</Text>

            </ButtonOption>
          </ContainerButtonOption>
        )}
    </Container>
  )
}