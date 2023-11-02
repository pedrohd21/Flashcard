import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 72px;
  flex-direction: column;
`;
export const MainTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  margin: 0 22px ;
`;

export const SubTitle = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `};
  margin: 5px 20px;
  padding-left: 10px;
  border-radius: 14px;
  height: 40px;

`;