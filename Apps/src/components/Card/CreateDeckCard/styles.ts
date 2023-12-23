import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;

  height: 150px;

  margin: 10px 22px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  border-radius: 14px ;
  
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  padding-left: 10px;
  padding-top: 5px;
`;

export const TextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.BLUE};

  padding-left: 10px;
  font-family: 'Roboto-Regular';
`;

export const BorderRadius = styled.Text`
  border-bottom-width: 2px; 
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  height: 1px;
  
  margin: -12px 6px 0;
`;