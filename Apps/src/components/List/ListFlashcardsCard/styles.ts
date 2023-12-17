import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;
  margin: 10px 10px;
  border-radius: 14px ;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  width: 100%;
  padding: 10px;
  font-family: 'Roboto-Regular' ;
  text-align: left;
`;
