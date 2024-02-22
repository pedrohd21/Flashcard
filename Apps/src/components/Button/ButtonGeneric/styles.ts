import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  width: 120px;
  height: 30px; 

  margin-left: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin-right: 7px;
`;