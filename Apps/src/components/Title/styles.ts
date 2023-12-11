import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 40px;
  margin: 30px 10px 0px;
  border-radius: 14px ;
  /* justify-content: center; */
  align-items: center;
`;
export const MainTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  margin: 0 10px ;
  font-family: 'Roboto-Bold';
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  font-family: 'Roboto-Regular';
`;
