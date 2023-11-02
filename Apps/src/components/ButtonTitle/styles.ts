import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const Button = styled.TouchableOpacity`
  flex-direction: row;
  height: 30px;
  width: 110px;
  background-color: red; 
  margin: auto;
  border-radius: 10px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_900};
`};
  font-family: 'Roboto-Bold';
  margin: auto 18px;
`;

export const Icon = styled(FontAwesome5)`
${({ theme }) => css`
  font-size: ${theme.ICON.SIZE.SM}px;
  color: ${theme.COLORS.GRAY_900};
`};
  position: absolute;
  top: 6px; 
  right: 18px;
`;