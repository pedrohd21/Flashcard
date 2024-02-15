import React, { useState } from "react";
import { Container, ContainerButtonOption, ButtonOption, ButtonShow, Icon, Text } from "./styles";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { FlatList, TouchableOpacityProps, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { PracticeComponente } from "../../components/PracticeComponente";
import theme from "../../theme";

type Props = TouchableOpacityProps & {
  onPressButtonRepeat?: () => void;
  onPressButtonHard?: () => void;
  onPressButtonGood?: () => void;
  onPressButtonEasy?: () => void;
  onPressButtonShow?: () => void;
  onPressOpenModal?: () => void;
}

export function Practice({ onPressButtonRepeat, onPressButtonHard, onPressButtonGood, onPressButtonEasy, onPressButtonShow, onPressOpenModal, ...rest }: Props) {
  const [showAnswer, setShowAnswer] = useState(true);


  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const data = [
    { key: '1', textFront: 'amar', 
    textBack: 'love' },


  ]

  return (
    <Container>
      <Header
        title='Flashcard'
        showButtonRight={true}
        showBackButton={true}
        onPressButtonLeft={handleGoBack}
        iconNameRight='ellipsis-v'
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PracticeComponente
            textFront={item.textFront}
            textBack={item.textBack}
          />
        )}
      />
      {!showAnswer &&
        (
          <ContainerButtonOption>
            <ButtonShow hitSlop={20} onPress={onPressButtonShow}>
              <Text>Mostrar Resposta</Text>
              <Icon
                name='eye'
                color={theme.COLORS.BLUE}
                size={20}
                onPress={() => { }}
              />
            </ButtonShow>
          </ContainerButtonOption>
        )}
      {showAnswer &&
        (
          <ContainerButtonOption>
            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.RED }} onPress={onPressButtonRepeat}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.RED }}>&lt; 1m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.RED }}>Repetir</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.WHITE }} onPress={onPressButtonHard}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.WHITE }}>&lt; 10m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.WHITE }}>Dificil</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.GREEN }} onPress={onPressButtonGood}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.GREEN }}>&lt; 60m</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.GREEN }}>Bom</Text>
            </ButtonOption>

            <ButtonOption hitSlop={20} style={{ borderColor: theme.COLORS.BLUE }} onPress={onPressButtonEasy}>
              <Text style={{ fontSize: theme.FONT_SIZE.ESM, color: theme.COLORS.BLUE }}>&lt; 1d</Text>
              <Text style={{ fontSize: theme.FONT_SIZE.SM, fontFamily: 'Roboto-Bold', color: theme.COLORS.BLUE }}>Facil</Text>

            </ButtonOption>
          </ContainerButtonOption>
        )}
    </Container>
  )
}