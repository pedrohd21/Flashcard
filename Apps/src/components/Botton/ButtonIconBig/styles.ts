import styled from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.BLUE};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  width: 150px;
  height: 60px;
  

`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.MD}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.GRAY_900};
  margin: 5px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: 'Roboto-Bold';
  margin: 5px;
`;