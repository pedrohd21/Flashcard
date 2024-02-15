import React, { useState } from "react";
import { Container, QuestionFlashcard, AnswerFlashcard, ContainerQuestionAnswer, Text } from "./styles";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacityProps } from "react-native";

import theme from "../../theme";

type Props = TouchableOpacityProps & {
  textFront?: string;
  textBack?: string;
}

export function PracticeComponente({textFront, textBack, ...rest }: Props) {
  const [showAnswer, setShowAnswer] = useState(true);

  return (
    <Container>
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

    </Container>
  )
}