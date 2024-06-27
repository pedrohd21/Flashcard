import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};  
`;

export const ContainerButtonOption = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonShow = styled(TouchableOpacity)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  width: 200px;
  height: 50px; 

  align-items: center;
  justify-content: center;
`;

export const ButtonOption = styled(TouchableOpacity)`
  border-radius: 7px;
  border: 1px solid;

  width: 23%;
  height: 40px;

  margin: 0 1px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Regular';
`;