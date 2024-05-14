import React, { useEffect, useState } from "react";
import { Container, QuestionFlashcard, AnswerFlashcard, ContainerQuestionAnswer, Text, ContainerButtonOption, ButtonOption, ButtonShow, Icon, } from "./styles";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
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
              <Text style={{fontFamily: 'Roboto-Bold'}}>Mostrar Resposta</Text>
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
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.RED }} onPress={buttonRepeat}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.RED }}>Repetir</Text>
            </ButtonOption>
            {/* // )} */}
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.WHITE }} onPress={buttonHard}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.WHITE }}>Dificil</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.GREEN }} onPress={buttonGood}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.GREEN }}>Bom</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.BLUE }} onPress={buttonEasy}>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.BLUE }}>Facil</Text>

            </ButtonOption>
          </ContainerButtonOption>
        )}
    </Container>
  )
}