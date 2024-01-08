import React from 'react';
import { ButtonCreateFlascard, ButtonpracticeFlascard, Container, Icon, Text } from './styles';
import { TouchableOpacityProps } from "react-native";
import theme from '../../../theme';

type Props = TouchableOpacityProps & {
  onPressButtonCreate?: () => void;
  onPressButtonPratice?: () => void;
}

export function ButtonCreate({onPressButtonCreate, onPressButtonPratice, ...rest }: Props) {
  return (
    <Container hitSlop={20}>
      <ButtonCreateFlascard {...rest} onPressOut={onPressButtonCreate}>
        <Icon
          name='plus'
          color={theme.COLORS.BLACK}
          size={15}
          onPress={onPressButtonCreate}
        />
        <Text>Add</Text>
      </ButtonCreateFlascard>
      <ButtonpracticeFlascard {...rest} onPressOut={onPressButtonPratice}>
        <Icon
          name='book-reader'
          color={theme.COLORS.BLUE}
          size={15}
        />
        <Text style={{color: theme.COLORS.BLUE}}>Praticar</Text>
      </ButtonpracticeFlascard >
    </Container>

  )
}