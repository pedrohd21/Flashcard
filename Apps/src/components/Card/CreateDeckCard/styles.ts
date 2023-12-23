import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  height: 150px;
  margin: 10px 22px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 14px ;
  justify-content: center;
`;
export const Text = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  
  font-family: 'Roboto-Bold';
  padding-left: 10px;
  padding-top: 5px;
`;

export const TextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLUE};

  padding-left: 10px;
  font-family: 'Roboto-Regular';
`;
export const BorderRadius = styled.Text`
  border-bottom-width: 2px; 
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  height: 1px;
  margin: -12px 6px 0;
`;