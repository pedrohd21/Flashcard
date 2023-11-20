import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 70px;
  margin: 10px 22px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 14px ;
  align-items: center;
`;

export const ContainerText = styled.View`
  width: 250px;
  justify-content: center;
  padding-top: 20px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
`;

export const TextTitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  padding: 5px 10px ;
  font-family: 'Roboto-Bold' ;
  height: 30px;
`;

export const TextContent = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    border-color: ${theme.COLORS.PURPLE};
  
  `};
  padding-left: 10px;
  font-family: 'Roboto-Regular' ;
  height: 42px;
`;

