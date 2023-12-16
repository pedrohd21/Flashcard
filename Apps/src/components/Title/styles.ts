import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 30px;
  margin: 10px;
  border-radius: 14px ;
  justify-content: center;
  align-items: center;
`;
export const MainTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE};
  `};
  font-family: 'Roboto-Bold';
`;

