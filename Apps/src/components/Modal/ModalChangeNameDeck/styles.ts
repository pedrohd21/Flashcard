import { TouchableOpacity } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: 'Roboto-Bold';

`;

export const TextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
   padding-left: 10px;
   font-family: 'Roboto-Regular';
   border-radius: 10px;
   border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
   height: 40px;
   width: 90%;
   margin: 20px 0;
   text-align: center;
`;

export const ModalContainer = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
`;

export const ModalContent = styled.View`
   justify-content: center;
   align-items: center;
   width: 70%;
   height: 180px;
   background-color: ${({ theme }) => theme.COLORS.GRAY_900};
   border-radius: 10px;
   border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  `;

export const ModalButton = styled(TouchableOpacity)`
  flex-direction: row;
  width: 100px;
  height: 30px;
  margin: 0 5px;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const ButtonModalContainer = styled.View`
   flex-direction: row;

`;

export const Icon = styled(FontAwesome5Icon)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin-right: 7px;
`;