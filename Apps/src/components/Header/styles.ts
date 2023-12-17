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
    color: ${theme.COLORS.BLUE};
  `};
  font-family: 'Roboto-Bold';
  position: absolute;
  top: 10px; 
  width: 70%;
  text-align:center;
`;

export const IconRight = styled(Icon)`
  ${({ theme, color }) => css`
    font-size: ${theme.ICON.SIZE.MD}px;
    color: ${color ? color : theme.COLORS.TEAL};
  `};
`;

export const ButtonBackIcon = styled.TouchableOpacity`
  position: absolute;
  top: 14px; 
  left: 22px;
`;

export const ButtonRight = styled.TouchableOpacity`
  position: absolute;
  top: 14px; 
  right: 22px;
`;

export const IconBack = styled(Icon)`
  ${({ theme }) => css`
      font-size: ${theme.ICON.SIZE.MD}px;
      color: ${theme.COLORS.BLUE};
    `};
   
`;

