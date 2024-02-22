import styled from "styled-components/native";

export const Container = styled.View`
  height: 110px;

  margin: 12px 12px;
  border-radius: 14px ;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  justify-content: center;
`;

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  width: 90%;
  height: 25px;
  padding-left: 10px;
  font-family: 'Roboto-Medium' ;
  text-align: left;
  margin-bottom: 10px;
`;

export const ContadorFlascard = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  background-color: ${({ theme }) => theme.COLORS.BLACK};

  border-width: 0.5px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};

  width: 25px;
  font-family: 'Roboto-Regular';

  text-align: center;
  position: absolute;
  bottom: -10px;
  right: 15px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: -10px;
  top: 5px;
  z-index: 1;
  width: 30px;
  height: 20px;
`;
