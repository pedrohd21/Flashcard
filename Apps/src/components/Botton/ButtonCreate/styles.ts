import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  margin-left: 10px;
  margin-top: 10px;

  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  width: 100px;
  height: 30px; 

  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-left: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin-right: 7px;
`;