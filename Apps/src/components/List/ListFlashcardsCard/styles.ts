import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  margin: 10px 10px;
  border-radius: 8px ;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  width: 100%;
  max-height: 68px;
  padding: 10px;
  font-family: 'Roboto-Regular' ;
  text-align: left;
`;
