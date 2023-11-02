import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const Button = styled.TouchableOpacity`
${({ theme }) => css`
  background-color: ${theme.COLORS.PURPLE};
`};
  flex: 1;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  bottom: 20px; 
  position: absolute;
  bottom: 20px;
  right: 22px;

`;

export const Icon = styled(FontAwesome5)`
${({ theme }) => css`
  font-size: ${theme.ICON.SIZE.XL}px;
  color: ${theme.COLORS.GRAY_900};
`};
  margin: auto;
`;