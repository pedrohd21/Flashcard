import React from "react";
// import { Text } from "react-native";
import { Container, Text, IconRight, ButtonBackIcon, IconBack, ButtonRight } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  iconNameRight: string;
  showBackButton: boolean;
  showButtonRight: boolean;
}

export function Header({ title, showBackButton, iconNameRight, showButtonRight }: Props) {
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
        <ButtonRight>
          <IconRight name={iconNameRight} />
        </ButtonRight>
      }


    </Container>

  );
}