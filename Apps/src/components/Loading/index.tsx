import { Container, LoadIndicator } from './styles';
import { Text } from 'react-native';

export function Loading(){
  return (
    <Container>
      <Text> Carregando </Text> 
      <LoadIndicator/>
    </Container>
  )
}