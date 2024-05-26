import React from 'react';
import { Button, Container, Icon, Text } from './styles';
import { TouchableOpacityProps } from "react-native";
import theme from '../../../theme';

type Props = TouchableOpacityProps & {
  onPressButtonCreate?: () => void;
  onPressButtonPratice?: () => void;
  onPressButtonEdit?: () => void;
}

export function ButtonCreate({onPressButtonCreate, onPressButtonPratice, onPressButtonEdit, ...rest }: Props) {
  return (
    <Container>
      <Button {...rest} onPress={onPressButtonCreate} style={{width: 80, marginLeft: 0}} hitSlop={20}>
        <Icon
          name='plus'
          color={theme.COLORS.BLUE}
          size={15}
          onPress={onPressButtonCreate}
        />
        <Text>Add</Text>
      </Button>
      <Button {...rest} onPress={onPressButtonPratice} hitSlop={20}>
        <Icon
          name='book-reader'
          color={theme.COLORS.BLUE}
          size={15}
        />
        <Text style={{color: theme.COLORS.BLUE}}>Praticar</Text>
      </Button >
      <Button {...rest} onPress={onPressButtonEdit} hitSlop={20}>
        <Icon
          name='edit'
          color={theme.COLORS.BLUE}
          size={15}
        />
        <Text style={{color: theme.COLORS.BLUE}}>Editar</Text>
      </Button >
    </Container>

  )
}