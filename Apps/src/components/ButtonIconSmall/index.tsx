import React from 'react';
import { Button, Icon } from './styles';

type Props = {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  style?: any;
}

export function ButtonIconSmall({ iconName, iconSize, iconColor, style }: Props) {
  return (
      <Button>
        <Icon name={iconName ? iconName : ''} size={iconSize} color={iconColor} style={style}/>
      </Button>
  )
}