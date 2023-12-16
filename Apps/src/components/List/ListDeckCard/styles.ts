import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  height: 50px;

  margin: 7px 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 14px ;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  width: 80%;
  padding-left: 10px;
  font-family: 'Roboto-Bold' ;
  text-align: left;
`;

