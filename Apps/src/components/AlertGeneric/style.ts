import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AlertButton = styled(TouchableOpacity)`
  flex-direction: row;
  width: 100px;
  height: 30px;
  margin: 0 5px;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const AlertButtonContainer = styled.View`
   flex-direction: row;

`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin-right: 7px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: 'Roboto-Bold';

`;