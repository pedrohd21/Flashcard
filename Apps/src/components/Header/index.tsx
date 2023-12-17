import React from "react";
// import { Text } from "react-native";
import { Container, Text, IconRight, ButtonBackIcon, IconBack, ButtonRight } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ViewStyle } from "react-native";

type Props = {
  title: string;
  iconNameRight?: string;
  iconColorRight?: string;
  showBackButton?: boolean;
  showButtonRight?: boolean;
  onPressButtonRight?: () => void;
  onPressButtonLeft?: () => void;
  style?: ViewStyle;
}

export function Header({ title, showBackButton, iconNameRight, showButtonRight, iconColorRight, onPressButtonRight, onPressButtonLeft, style }: Props) {
  return (
    <Container 
      style={style}
    >
      {showBackButton &&
        <ButtonBackIcon onPress={onPressButtonLeft}>
          <IconBack name='arrow-left' />
        </ButtonBackIcon>}
      <Text>{title}</Text>
      {showButtonRight &&
        <ButtonRight onPress={onPressButtonRight}>
          <IconRight name={iconNameRight ? iconNameRight : ''} color={iconColorRight} />
        </ButtonRight>
      }


    </Container>

  );
}