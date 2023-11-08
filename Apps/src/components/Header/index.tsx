import React from "react";
// import { Text } from "react-native";
import { Container, Text, IconRight, ButtonBackIcon, IconBack, ButtonRight } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  iconNameRight?: string;
  iconColorRight?: string;
  showBackButton?: boolean;
  showButtonRight?: boolean;
  onPressButtonRight?: () => void;
}

export function Header({ title, showBackButton, iconNameRight, showButtonRight, iconColorRight, onPressButtonRight }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container>
      {showBackButton &&
        <ButtonBackIcon onPress={handleGoBack}>
          <IconBack name='arrow-left' />
        </ButtonBackIcon>}
      <Text>{title}</Text>
      {showButtonRight &&
        <ButtonRight onPress={onPressButtonRight}>
          <IconRight name={iconNameRight ? iconNameRight : ''} color={iconColorRight}/>
        </ButtonRight>
      }


    </Container>

  );
}