import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* bottom: 10px; */
  /* position: absolute; */
  margin-top: 30px;
  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
${({ theme }) => css`
  background-color: ${theme.COLORS.BLUE};
`};
  border-radius: 50px;
  width: 60px;
  height: 60px;
  bottom: 0; 

`;

export const Icon = styled(FontAwesome5)`
${({ theme, size, color, name }) => css`
    font-size: ${size ? size : theme.ICON.SIZE.LG}px;
    color: ${color ? color : theme.COLORS.GRAY_900};
  `};
  margin: auto;
`;