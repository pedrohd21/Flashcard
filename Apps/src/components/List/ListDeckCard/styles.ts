import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)`
  height: 100px;

  margin: 12px 12px;
  border-radius: 14px ;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  justify-content: center;
`;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 90%;
  padding-left: 10px;
  font-family: 'Roboto-Bold' ;
  text-align: left;
  margin-bottom: 10px
`;

export const ContadorFlascard = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  width: 25px;
  font-family: 'Roboto-Regular';
  border-radius: 5px;
  text-align: center;
  position: absolute;
  bottom: -10px;
  right: 15px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: 3px;
  top: 5px;
  z-index: 1;
  width: 30px;
  height: 20px;
`;
