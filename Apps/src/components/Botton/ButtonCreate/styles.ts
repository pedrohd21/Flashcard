import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  margin-left: 20px;
  margin-top: 10px;

  width: 100%;
`;

export const ButtonCreateFlascard = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  flex-direction: row;

  border-radius: 10px;

  width: 100px;
  height: 30px; 

  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ButtonpracticeFlascard = styled(TouchableOpacity)`
  flex-direction: row;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  width: 120px;
  height: 30px; 

  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-left: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;