import React from "react";
import { Container, ContainerIcons, TextTitle, TextContent } from "./styles";
import { ButtonIconSmall } from "../../ButtonIconSmall";


type Props = {
  textFront: string;
  textBack: string;
}

export function ListFlashcard() {
  return (
    <Container>
      <TextTitle>
        Vocabulario
      </TextTitle>
      <TextContent >
        As palavras usadas em ingles ingles 
      </TextContent>

      <ContainerIcons>
        <ButtonIconSmall
          iconName="pen-square"
        />
        <ButtonIconSmall
          iconName="trash"
        />
      </ContainerIcons>

    </Container>
  );
}