import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
 
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 40px;
`;