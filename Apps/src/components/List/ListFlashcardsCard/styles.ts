import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;
  margin: 7px 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 14px ;
  justify-content: center;
  align-items: center;
`;

export const TitleFront = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  width: 100%;
  padding-left: 10px;
  font-family: 'Roboto-Bold' ;
  text-align: left;
  height: 20px;
`;

export const TitleBack = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  width: 100%;
  margin: 5px;
  font-family: 'Roboto-Bold' ;
  text-align: left;
  height: 20px;
  padding-left: 10px;
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
