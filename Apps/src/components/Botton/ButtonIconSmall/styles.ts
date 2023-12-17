import styled, { css } from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)`
  justify-content: center; 
  align-items: center; 
  z-index: 1;
`;

export const Icon = styled(FontAwesome5)`
${({ theme, size, color }) => css`
    font-size: ${size ? size : theme.ICON.SIZE.LG}px;
    color: ${color ? color : theme.COLORS.BLUE};
  `};
  margin-right: 7px;
`;