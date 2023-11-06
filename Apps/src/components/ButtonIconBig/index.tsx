import React from 'react';
import { Button, Icon } from './styles';


type Props = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
}

export function ButtonIconBig({ iconName, iconSize, iconColor }: Props) {
  return (
    <Button>
      <Icon name={iconName} size={iconSize} color={iconColor}/>
    </Button>
  )
}