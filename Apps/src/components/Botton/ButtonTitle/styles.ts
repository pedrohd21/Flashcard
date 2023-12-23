import styled  from "styled-components/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;

  height: 30px;
  width: 130px;

  background-color: ${({ theme }) => theme.COLORS.BLUE};

  margin: auto;

  border-radius: 10px;
  
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme}) => theme.COLORS.GRAY_900};
  font-family: 'Roboto-Bold';

`;

export const Icon = styled(FontAwesome5)`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme, color }) => theme.COLORS.GRAY_900};
  padding-left: 10px;
`;