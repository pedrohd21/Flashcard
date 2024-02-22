import React from "react";
import { ButtonContainer, Text} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ButtonGeneric } from "../../Button/ButtonGeneric";

type Props = TouchableOpacityProps &  {
  textFront: string;
  textBack: string;
  deleteFlashcard?: () => void;
  editFlashcard?: () => void;
}

export function ListFlashcardsCard({textFront, textBack, deleteFlashcard, editFlashcard, ...rest}: Props) {
  return (
    <ButtonContainer >
      <Text>
        {textFront}
      </Text>
      <Text>
        {textBack}
      </Text>
      <ButtonGeneric
        onPressButtonEdit={editFlashcard}
        onPressButtonDeletar={deleteFlashcard}
      />
    </ButtonContainer>
  );
}