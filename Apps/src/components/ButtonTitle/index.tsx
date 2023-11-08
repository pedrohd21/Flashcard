import React from 'react';
import { Button, Text, Icon } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  iconName: string;
  onPressButton?: () => void;
}
export function ButtonTitle({ iconName, onPressButton, ...rest }: Props) {
  return (
    <Button {...rest} onPress={onPressButton}>
      <Text>
        Remover
      </Text>
      <Icon name={iconName} />
    </Button>
  )
}