import styled, {css} from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-family: 'Roboto';
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
   font-size: ${theme.FONT_SIZE.MD}px;
   color: ${theme.COLORS.WHITE};
   border-color: ${theme.COLORS.BLUE};
 
 `};
 padding-left: 10px;
 font-family: 'Roboto-Regular';
`;

export const ModalContainer = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;

`;

export const ModalContent = styled.View`
   justify-content: center;
   align-items: center;
   width: 50%;
   height: 40%;
   background-color: ${({ theme }) => theme.COLORS.BLUE};
  height: 150px;
  border-radius: 10px;
  `;

export const ModalButton = styled(TouchableOpacity)`

  width: 80px;
  height: 30px;
  /* background-color: ${({ theme }) => theme.COLORS.RED}; */
  margin: 0 5px;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const ButtonModalContainer = styled.View`
   flex-direction: row;

`;