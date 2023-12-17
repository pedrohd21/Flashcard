import styled, {css} from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
  width: 100%;
`;

export const ButtonCreateFlascard = styled(TouchableOpacity)`
${({ theme }) => css`
  background-color: ${theme.COLORS.BLUE};
`};
  border-radius: 10px;
  width: 180px;
  height: 30px; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonpracticeFlascard = styled(TouchableOpacity)`
${({ theme }) => css`
  background-color: ${theme.COLORS.BLUE};
`};
  border-radius: 10px;
  width: 110px;
  height: 30px; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const Icon = styled(FontAwesome5)`
${({ theme }) => css`
    font-size: ${theme.ICON.SIZE.SM}px;
    color: ${theme.COLORS.GRAY_900};
  `};
  margin-right: 5px;
`;

export const Text = styled.Text`
   color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;