import styled from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

  border-radius: 50px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 2px;

  width: 150px;
  height: 60px;
  
  bottom: 20px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.MD}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin: 5px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: 'Roboto-Bold';
  margin: 5px;
`;