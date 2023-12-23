import styled from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)`
  z-index: 1;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin-right: 7px;
`;