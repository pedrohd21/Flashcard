import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;

  height: 200px;
  margin: 60px 20px;
  padding: 20px;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: 'Roboto-Bold';
    color: ${theme.COLORS.BLUE_LIGHT};
  `};
`;