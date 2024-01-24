import React from 'react';
import { Button, Container, Icon, Text } from './styles';
import { TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../ButtonIconSmall';
import theme from '../../../theme';

type Props = TouchableOpacityProps & {
  onPressButtonEdit?: () => void;
  onPressButtonDeletar?: () => void;
}

export function ButtonGeneric({onPressButtonEdit, onPressButtonDeletar, ...rest }: Props) {
  return (
    <Container hitSlop={30}>
      <Button {...rest} onPressOut={onPressButtonEdit} style={{borderColor: theme.COLORS.BLUE}}>
        <Icon
          name='edit'
          color={theme.COLORS.BLUE}
          size={15}
        />
        <Text style={{color: theme.COLORS.BLUE}}>Editar</Text>
      </Button>
      <Button {...rest} onPressOut={onPressButtonDeletar} style={{borderColor: theme.COLORS.RED}}>
        <Icon
          name='trash'
          color={theme.COLORS.RED}
          size={15}
        />
        <Text style={{color: theme.COLORS.RED}}>Apagar</Text>
      </Button>
    </Container>

  )
}