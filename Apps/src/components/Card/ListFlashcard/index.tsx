import React from "react";
import { Container, TextTitle } from "./styles";
import { ButtonIconSmall } from "../../ButtonIconSmall";

type Props = {
  textTitle: string;
}

export function ListFlashcard({textTitle}: Props) {
  return (
    <Container>
      <TextTitle>
        {textTitle}
      </TextTitle>
 
        <ButtonIconSmall
          iconName="trash"
          iconSize={25}
        />
 
    </Container>
  );
}