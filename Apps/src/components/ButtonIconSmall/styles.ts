import styled, { css } from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)`
  width: 50px;
  height: 60px;
  justify-content: center; 
  align-items: center; 
`;

export const Icon = styled(FontAwesome5)`
${({ theme, size, color }) => css`
    font-size: ${size ? size : theme.ICON.SIZE.LG}px;
    color: ${color ? color : theme.COLORS.PURPLE};
  `};
  margin: auto;

`;