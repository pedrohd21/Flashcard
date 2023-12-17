import React from 'react';
import { ButtonCreateFlascard, ButtonpracticeFlascard, Container, Text } from './styles';
import { TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../ButtonIconSmall';
import theme from '../../../theme';

type Props = TouchableOpacityProps & {
  onPressButtonCreate?: () => void;
  onPressButtonPratice?: () => void;
}

export function ButtonCreate({onPressButtonCreate, onPressButtonPratice, ...rest }: Props) {
  return (
    <Container>
      <ButtonCreateFlascard {...rest} onPressOut={onPressButtonCreate}>
        <ButtonIconSmall
          iconName='plus'
          iconColor={theme.COLORS.BLACK}
          iconSize={15}
          onPress={onPressButtonCreate}
        />
        <Text>Add</Text>
      </ButtonCreateFlascard>
      <ButtonpracticeFlascard {...rest} onPressOut={onPressButtonPratice}>
        <ButtonIconSmall
          iconName='book-reader'
          iconColor={theme.COLORS.BLUE}
          iconSize={15}
        />
        <Text style={{color: theme.COLORS.BLUE}}>Praticar</Text>
      </ButtonpracticeFlascard>
    </Container>

  )
}