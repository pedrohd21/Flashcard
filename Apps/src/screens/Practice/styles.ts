import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  

`;

export const ContainerQuestionAnswer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
  /* margin: 0px 20px; */

`;

export const QuestionFlashcard = styled.View`
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 100%;
  margin-bottom: 9px;
`;
export const AnswerFlashcard = styled.View`
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: 'Roboto-Bold';
`;

export const ButtonShow = styled(TouchableOpacity)`
/* flex-direction: row; */
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

  /* margin: 0 10px; */
  width: 200px;
  height: 50px; 

  align-items: center;
  justify-content: center;
  bottom: 0px;
  position: absolute;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme, size }) => size ? size : theme.ICON.SIZE.LG}px;
  color: ${({ theme, color }) => color ? color : theme.COLORS.BLUE};
  margin-right: 7px;
`;