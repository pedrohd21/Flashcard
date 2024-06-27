import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Regular';
  text-align: center;

  padding: 10px;

  height: 50px;
  width: 100%;

  border-bottom-width: 0.3px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
`;

export const ModalContent = styled.View`
  position: absolute;
  bottom: 20px;
  justify-content: center;
  align-items: center;
  width: 90%;
  
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

  border-radius: 15px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 1px;
`;

export const ModalButton = styled(TouchableOpacity)`
  width: 100%;
`;
