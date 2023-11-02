import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_SKY};
  font-size: 40px;
`;

export const Button = styled