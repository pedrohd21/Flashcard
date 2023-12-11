import React from 'react';
import { Button, Text, Icon } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  iconName: string;
  descriptionText: string;
  onPressButton?: () => void;
}
export function ButtonTitle({ iconName, onPressButton, descriptionText, ...rest }: Props) {
  return (
    <Button {...rest} onPress={onPressButton}>
      <Text>
        {descriptionText}
      </Text>
      <Icon name={iconName} />
    </Button>
  )
}