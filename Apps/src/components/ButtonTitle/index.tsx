import React from 'react';
import { Button, Text, Icon } from './styles';

type Props = {
  iconName: string;
}
export function ButtonTitle({ iconName }: Props) {
  return (
    <Button>
      <Text>
        Remover
      </Text>
      <Icon name={iconName}/>
    </Button>
  )
}