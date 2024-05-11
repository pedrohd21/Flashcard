import React from 'react';
import { Button, Icon, Container, Text } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  text?: string;
  onPressButton?: () => void;
}

export function ButtonIconBig({ iconName, iconSize, iconColor, onPressButton, text, ...rest }: Props) {
  return (
    <Container >
      <Button hitSlop={20} {...rest} onPressOut={onPressButton}>
        
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <Text>{text || 'Add'}</Text>
      </Button>
    </Container>

  )
}