import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  height: 90px;
  margin: 10px 22px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 14px ;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  position: absolute;
  top: 15px;
  right: 0;
`;

export const TextTitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  padding: 5px 10px ;
  font-family: 'Roboto-Bold' ;
  height: 30px;
  width: 70%;
  justify-content: center;
`;

export const TextContent = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    border-color: ${theme.COLORS.BLUE};
  
  `};
  /* padding: 0px 15px; */
  padding-left: 18px;
  font-family: 'Roboto-Regular' ;
  height: 60px;
  width: 70%;
`;

