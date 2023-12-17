import React from 'react';
import { Button, Icon, Container, Text } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  onPressButton?: () => void;
}

export function ButtonIconBig({ iconName, iconSize, iconColor, onPressButton, ...rest }: Props) {
  return (
    <Container>
      <Button {...rest} onPressOut={onPressButton}>
        
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <Text>Add</Text>
      </Button>
    </Container>

  )
}