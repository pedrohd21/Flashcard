import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
${({ theme }) => css`
  background-color: ${theme.COLORS.BLUE};
`};
  flex-direction: row;
  border-radius: 50px;
  width: 150px;
  height: 60px;
  align-items: center;
  justify-content: center;

`;

export const Icon = styled(FontAwesome5)`
${({ theme, size, color, name }) => css`
    font-size: ${size ? size : theme.ICON.SIZE.MD}px;
    color: ${color ? color : theme.COLORS.GRAY_900};
  `};
  margin: 5px;
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.BLACK};
  `};
  font-family: 'Roboto-Bold';
  margin: 5px;
`;