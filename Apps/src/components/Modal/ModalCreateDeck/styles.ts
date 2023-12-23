import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
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
   background-Color: rgba(0, 0, 0, 0.8);
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