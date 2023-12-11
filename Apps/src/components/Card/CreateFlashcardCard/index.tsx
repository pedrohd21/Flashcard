import React, { useState } from "react";
import { Container, Text, TextBack, TextFront } from "./styles";
import { ButtonTitle } from "../../ButtonTitle";
import { ScrollView } from "react-native";
import theme from "../../../theme";
import { ButtonIconBig } from "../../ButtonIconBig";



type Props = {
  textFront: string;
  onChangeTextFront: (value: string) => void;

  textBack: string;
  onChangeTextBack: (value: string) => void;

  onPressButton?: () => void;
}

export function CreateFlashcardCard({ textFront, onChangeTextFront, textBack, onChangeTextBack, onPressButton }: Props,) {
  const [isFrontActiveFront, setIsFrontActiveFront] = useState(false);
  const [isFrontActiveBack, setIsFrontActiveBack] = useState(false);

  return (
    <ScrollView>
      <Container>
        <Text>
          Front
        </Text>
        <TextFront
          placeholder="Term (Front side)"
          keyboardAppearance="default"
          onChangeText={onChangeTextFront}
          onFocus={() => setIsFrontActiveFront(true)}
          onBlur={() => setIsFrontActiveFront(false)}
          multiline={true}
          style={{
            borderBottomColor: isFrontActiveFront ? theme.COLORS.TEAL : theme.COLORS.BLUE,
          }}
        >
          {textFront}
        </TextFront>

        <Text>
          Back
        </Text>
        <TextBack
          placeholder="Definition (back side)"
          keyboardAppearance="default"
          onChangeText={onChangeTextBack}
          onFocus={() => setIsFrontActiveBack(true)}
          onBlur={() => setIsFrontActiveBack(false)}
          multiline={true}
          style={{
            borderBottomColor: isFrontActiveBack ? theme.COLORS.TEAL : theme.COLORS.BLUE,
          }}
        >
          {textBack}
        </TextBack >

  
          <ButtonIconBig
          iconName="plus"
          
          />
      </Container>
    </ScrollView>
  );
}