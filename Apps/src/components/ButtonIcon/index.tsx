import React from 'react';
import { Button, Icon } from './styles';

type Props = {
  iconName: string;
}
export function ButtonIcon({ iconName }: Props) {
  return (
    <Button>
      <Icon name={iconName}/>
    </Button>
  )
}