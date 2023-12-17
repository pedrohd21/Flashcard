import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
  margin-top: -5px;
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
   font-size: ${theme.FONT_SIZE.MD}px;
   color: ${theme.COLORS.WHITE};
   border-color: ${theme.COLORS.BLUE};
 
 `};
   padding-left: 10px;
   font-family: 'Roboto-Regular';
   border-width: 1px;
   border-radius: 10px;
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
   border-color:  ${({ theme }) => theme.COLORS.BLUE};
   border-width: 1px;
  `;

export const ModalButton = styled(TouchableOpacity)`

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