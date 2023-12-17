import React from 'react';
import { Button, Container, Text } from './styles';
import { TouchableOpacityProps } from "react-native";
import { ButtonIconSmall } from '../ButtonIconSmall';
import theme from '../../../theme';

type Props = TouchableOpacityProps & {
  onPressButtonEdit?: () => void;
  onPressButtonDeletar?: () => void;
}

export function ButtonGeneric({onPressButtonEdit, onPressButtonDeletar, ...rest }: Props) {
  return (
    <Container>
      <Button {...rest} onPressOut={onPressButtonEdit} style={{borderColor: theme.COLORS.BLUE}}>
        <ButtonIconSmall
          iconName='edit'
          iconColor={theme.COLORS.BLUE}
          iconSize={15}
        />
        <Text style={{color: theme.COLORS.BLUE}}>Editar</Text>
      </Button>
      <Button {...rest} onPressOut={onPressButtonDeletar} style={{borderColor: theme.COLORS.RED}}>
        <ButtonIconSmall
          iconName='trash'
          iconColor={theme.COLORS.RED}
          iconSize={15}
        />
        <Text style={{color: theme.COLORS.RED}}>Apagar</Text>
      </Button>
    </Container>

  )
}