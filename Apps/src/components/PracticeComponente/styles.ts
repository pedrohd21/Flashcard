import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  height: 500px;
  align-items: center;
`;

export const ContainerQuestionAnswer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  height: 92%;
  width: 90%;
`;

export const QuestionFlashcard = styled.View`
  align-items: center;
  justify-content: center;

  max-height: 45%;

  margin-bottom: 9px;  
`;

export const AnswerFlashcard = styled.View`
  align-items: center;
  justify-content: center;

  max-height: 45%;
  width: 100%;

  padding-Top: 10px;
  margin-top: 10px;

  border-Top-width: 1px ; 
  border-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Regular';
`;

