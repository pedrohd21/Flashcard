import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;
  height: 100px;

  margin: 12px 12px;
  border-radius: 14px ;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const TextTitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
  width: 90%;
  padding-left: 10px;
  font-family: 'Roboto-Bold' ;
  text-align: left;
  margin-bottom: 10px
`;

export const ContadorFlascard = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK};
    background-color: ${theme.COLORS.BLUE};
  `};
  width: 25px;
  font-family: 'Roboto-Regular';
  border-radius: 5px;
  text-align: center;
  position: absolute;
  bottom: -10px;
  right: 15px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: 3px;
  top: 5px;
  z-index: 1;
  width: 30px;
  height: 20px;
`;
