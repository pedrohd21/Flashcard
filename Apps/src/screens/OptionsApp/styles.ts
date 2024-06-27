import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto';
`;

export const Button = styled(TouchableOpacity)`

  /* width: 90%; */
  height: 50px;
  margin: 10px 20px;
  padding: 0 10px;
  justify-content: center;
  /* align-items: center; */

  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 2px;
`;