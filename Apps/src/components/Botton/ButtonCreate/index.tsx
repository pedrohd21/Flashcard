import React from 'react';
import { ButtonCreateFlascard, ButtonpracticeFlascard, Icon, Container, Text } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  onPressButtonCreate?: () => void;
  onPressButtonPratice?: () => void;
}

export function ButtonCreate({onPressButtonCreate, onPressButtonPratice, ...rest }: Props) {
  return (
    <Container>
      <ButtonCreateFlascard {...rest} onPressOut={onPressButtonCreate}>
        <Icon name='plus' />
        <Text>Add Flashcard</Text>
      </ButtonCreateFlascard>
      <ButtonpracticeFlascard {...rest} onPressOut={onPressButtonPratice}>
        <Icon name='book-reader' size={25}/>
        <Text>Praticar</Text>
      </ButtonpracticeFlascard>
    </Container>

  )
}