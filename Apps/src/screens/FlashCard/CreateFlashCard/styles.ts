import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 40px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 40px;
`;