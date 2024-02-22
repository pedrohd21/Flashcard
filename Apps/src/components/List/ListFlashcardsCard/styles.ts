import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  /* flex: 1; */
  margin: 10px 10px;
  border-radius: 14px ;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  width: 100%;
  padding: 10px;
  font-family: 'Roboto-Regular' ;
  text-align: left;
`;
