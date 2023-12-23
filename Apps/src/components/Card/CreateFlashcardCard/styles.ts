import styled from "styled-components/native";

export const Container = styled.View`
  margin: 10px 10px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto-Bold';

  padding-left: 10px;
  padding-top: 20px;
`;

export const TextFront = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto-Regular';

  padding-top: 15px;
  padding-left: 10px;

  max-height: 200px;
  border-bottom-width: 2px; 
  border-color: ${({ theme }) => theme.COLORS.BLUE};

  margin: -12px 6px 0;
`;

export const TextBack = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto-Regular';

  max-height: 200px;

  padding-left: 10px;
  padding-top: 15px;

  border-bottom-width: 2px; 
  margin: -12px 6px 0;
`;