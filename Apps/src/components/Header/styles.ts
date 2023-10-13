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
    color: ${theme.COLORS.WHITE_LIGHT};
  `};
  font-family: 'Roboto-Bold';
`;

export const Icons = styled(Icon)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.RED_DARK};
  `};
  position: absolute;
  top: 14px; 
  left: 20px;
`;

