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

export const ContainerButtonOption = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonShow = styled(TouchableOpacity)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  width: 200px;
  height: 50px; 

  align-items: center;
  justify-content: center;
`;

export const ButtonOption = styled(TouchableOpacity)`
  border-radius: 7px;
  border: 1px solid;

  width: 23%;
  height: 40px;

  margin: 0 1px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
`;