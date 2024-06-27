import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 70px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  margin: 12px 12px;
  border-radius: 8px ;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  justify-content: center;
`;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  width: 90%;
  padding-left: 10px;
  font-family: 'Roboto-Medium' ;
  margin-bottom: 5px;
`;

export const ContadorFlascard = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  padding-left: 10px;
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.COLORS.BLUE_GRAY};

`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: -10px;
  top: 5px;
  z-index: 1;
  width: 30px;
  height: 20px;
`;
