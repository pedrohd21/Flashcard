import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  height: 100%;
  margin: 10px 10px;
  border-radius: 14px ;
`;

export const Text = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  
  font-family: 'Roboto-Bold';
  padding-left: 10px;
  padding-top: 20px;
`;

export const TextFront = styled.TextInput`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    border-color: ${theme.COLORS.BLUE};
  `};
  padding-top: 15px;
  padding-left: 10px;
  font-family: 'Roboto-Regular';

  max-height: 200px;
  border-bottom-width: 2px; 
  margin: -12px 6px 0;
  border-bottom-width: 2px;
`;

export const TextBack = styled.TextInput`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `};
  max-height: 200px;
  padding-left: 10px;
  padding-top: 15px;
  font-family: 'Roboto-Regular';

  border-bottom-width: 2px; 
  margin: -12px 6px 0;
`;