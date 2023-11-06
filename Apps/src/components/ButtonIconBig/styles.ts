import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Button = styled.TouchableOpacity`
${({ theme }) => css`
  background-color: ${theme.COLORS.PURPLE};
`};
  flex: 1;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  bottom: 20px; 
  right: 22px;
  position: absolute;
`;

export const Icon = styled(FontAwesome5)`
${({ theme, size, color, name }) => css`
    font-size: ${size ? size : theme.ICON.SIZE.LG}px;
    color: ${color ? color : theme.COLORS.GRAY_900};
  `};
  margin: auto;
`;