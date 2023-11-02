import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  height: 190px;
  margin: 20px 22px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 14px ;
`;

export const Text = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  padding-left: 10px;
  padding-top: 5px;

`;

export const TextFront = styled.TextInput`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    border-color: ${theme.COLORS.PURPLE};
  
  `};
  padding-left: 10px;
  

`;

export const TextBack = styled.TextInput`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
  padding-left: 10px;
`;

export const BorderRadius = styled.Text`
 ${({ theme }) => css`
    border-color: ${theme.COLORS.PURPLE};
  `};
  border-bottom-width: 2px; 
  height: 1px;
  margin: -12px 6px 0;
`;