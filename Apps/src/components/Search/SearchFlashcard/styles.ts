import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: 'Roboto-Bold';
`;

export const TextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  font-family: 'Roboto-Regular';
  border-radius: 10px;
  height: 40px;
  width: 80%;
  margin: 0 10px;
`;

export const ModalContainer = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const ModalContent = styled.View`
  flex-direction: row;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  `;


