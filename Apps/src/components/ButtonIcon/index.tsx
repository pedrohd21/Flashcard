import React from 'react';
import { Button, Icon } from './styles';

type Props = {
  iconName: string;
}
export function ButtonIcon({ iconName, ...rest }: Props) {
  return (
    <Button{...rest}>
      <Icon name={iconName}/>
    </Button>
  )
}