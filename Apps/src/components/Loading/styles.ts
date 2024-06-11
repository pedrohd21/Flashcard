import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  z-index: 9999; 
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BLUE
}))``;