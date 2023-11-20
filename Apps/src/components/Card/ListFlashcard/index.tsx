import React from "react";
import { Container, ContainerIcons, ContainerText, TextTitle, TextContent } from "./styles";
import { ButtonIconSmall } from "../../ButtonIconSmall";


type Props = {
  textFront: string;
  textBack: string;
}

export function ListFlashcard() {
  return (
    <Container>
      <ContainerText>
        <TextTitle>
          Front
        </TextTitle>
        <TextContent >
          Description
        </TextContent>
      </ContainerText>

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