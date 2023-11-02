import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  height: 55px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.PURPLE};
  `};
  font-family: 'Roboto-Bold';
  position: absolute;
  top: 10px; 
`;

export const IconsRight = styled(Icon)`
  ${({ theme }) => css`
    font-size: ${theme.ICON.SIZE.MD}px;
    color: ${theme.COLORS.PURPLE};
  `};
  position: absolute;
  top: 14px; 
  left: 22px;
`;

export const IconsLeft = styled(Icon)`
  ${({ theme }) => css`
    font-size: ${theme.ICON.SIZE.MD}px;
    color: ${theme.COLORS.TEAL};
  `};
  position: absolute;
  top: 14px; 
  right: 22px;
`;

