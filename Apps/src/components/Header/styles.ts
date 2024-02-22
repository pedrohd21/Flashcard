import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  height: 55px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: 'Roboto-Bold';
  text-align:center;

  position: absolute;
  top: 10px; 

  width: 70%;
`;

export const IconRight = styled(Icon)`
  font-size: ${({ theme }) => theme.ICON.SIZE.MD}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
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
  font-size: ${({ theme }) => theme.ICON.SIZE.MD}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
`;

