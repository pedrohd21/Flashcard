import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const Button = styled.TouchableOpacity`
  flex-direction: row;
  height: 30px;
  width: 130px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  margin: auto;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_900};
`};
  font-family: 'Roboto-Bold';

`;

export const Icon = styled(FontAwesome5)`
${({ theme }) => css`
  font-size: ${theme.ICON.SIZE.MD}px;
  color: ${theme.COLORS.GRAY_900};
`};
  padding-left: 10px;
`;