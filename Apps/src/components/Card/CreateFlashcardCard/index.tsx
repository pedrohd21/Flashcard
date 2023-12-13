import React, { useState } from "react";
import { Container, Text, TextBack, TextFront } from "./styles";
import { ButtonTitle } from "../../ButtonTitle";
import { ScrollView, TextInput, TextInputProps } from "react-native";
import theme from "../../../theme";
import { ButtonIconBig } from "../../ButtonIconBig";



// type Props = {
//   textFront: string;
//   onChangeTextFront: (value: string) => void;

//   textBack: string;
//   onChangeTextBack: (value: string) => void;

//   onPressButton?: () => void;
// }
type Props = TextInputProps & {
  inputRefFront?: React.RefObject<TextInput>;
  inputRefBack?: React.RefObject<TextInput>;
  onChangeTextFront: (value: string) => void;
  onChangeTextBack: (value: string) => void;
  valueTextFront: any;
  valueTextBack: any;
}


export function CreateFlashcardCard({ inputRefFront, inputRefBack, onChangeTextFront, onChangeTextBack, valueTextFront, valueTextBack, ...rest }: Props) {
  const [isFrontActiveFront, setIsFrontActiveFront] = useState(false);
  const [isFrontActiveBack, setIsFrontActiveBack] = useState(false);

  return (
    <ScrollView>
      <Container>
        <Text>
          Front
        </Text>
        <TextFront
          {...rest}
          placeholder="Term (Front side)"
          keyboardAppearance="default"
          onChangeText={onChangeTextFront}
          ref={inputRefFront}
          onFocus={() => setIsFrontActiveFront(true)}
          onBlur={() => setIsFrontActiveFront(false)}
          value={valueTextFront}
          multiline={true}
          style={{
            borderBottomColor: isFrontActiveFront ? theme.COLORS.TEAL : theme.COLORS.BLUE,
          }}
        />

        <Text>
          Back
        </Text>
        <TextBack
          {...rest}
          ref={inputRefBack}
          placeholder="Definition (back side)"
          keyboardAppearance="default"
          onChangeText={onChangeTextBack}
          onFocus={() => setIsFrontActiveBack(true)}
          onBlur={() => setIsFrontActiveBack(false)}
          value={valueTextBack}
          multiline={true}
          style={{
            borderBottomColor: isFrontActiveBack ? theme.COLORS.TEAL : theme.COLORS.BLUE,
          }}
        />

      </Container>
    </ScrollView>
  );
}