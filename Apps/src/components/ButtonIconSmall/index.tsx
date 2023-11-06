import React from 'react';
import { Button, Icon } from './styles';

type Props = {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;

}

export function ButtonIconSmall({ iconName, iconSize, iconColor }: Props) {
  return (
      <Button>
        <Icon name={iconName ? iconName : ''} size={iconSize} color={iconColor} />
      </Button>
  )
}