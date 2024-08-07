import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: 'Roboto-Bold';
`;

export const TextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.COLORS.BLUE};
  height: 40px;
  width: 90%;
  padding-left: 20px;
  /* margin: 0 10px; */
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  flex-direction: row;
  margin: 10px 10px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

`;




