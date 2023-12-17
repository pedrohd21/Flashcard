import React from 'react';
import { Button, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  style?: any;
}

export function ButtonIconSmall({ iconName, iconSize, iconColor, style, ...rest }: Props) {
  return (
      <Button {...rest}>
        <Icon name={iconName ? iconName : ''} size={iconSize} color={iconColor} style={style}/>
      </Button>
  )
}