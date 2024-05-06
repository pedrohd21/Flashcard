import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-Color: rgba(0, 0, 0, 0.7);
  align-items: center;
`;

export const Text = styled.Text`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  padding-left: 17px;
  padding-top: 5px;
  margin-bottom: 10px;
  
`;

export const TextInput = styled.TextInput`
  width: 90%;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLUE};

  padding-left: 20px;
  font-family: 'Roboto-Regular';

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 10px;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 1px;

  width: 50%;
  height: 60px;
  
  margin: 10px 0;
`;

export const ButtonSmall = styled(TouchableOpacity)`

  width: 90%;
  height: 20px;

  margin-bottom: 20px;
`;

export const TextButtton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.MD}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin: 5px;
`;