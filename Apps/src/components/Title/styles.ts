import styled from "styled-components/native";

export const Container = styled.View`
  height: 30px;
  margin: 10px;
  border-radius: 14px ;
  justify-content: center;
  align-items: center;
`;
export const MainTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto-Bold';
`;

