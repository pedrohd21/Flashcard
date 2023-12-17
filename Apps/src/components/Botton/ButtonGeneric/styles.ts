import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 1px;
  width: 120px;
  height: 30px; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  z-index: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;