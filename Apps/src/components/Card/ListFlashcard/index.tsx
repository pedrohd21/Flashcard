import React from "react";
import { Container, TextTitle, TextContent } from "./styles";


type Props = {
  textTitle: string;
  textContent: string;
}

export function ListFlashcard({textTitle, textContent}: Props) {
 
  return (
    <Container>
      <TextTitle>
        Vocabulario
        {textTitle}
      </TextTitle>
      <TextContent >
        As palavras usadas em ingles ingles 
        {textContent}
      </TextContent>
    </Container>
  );
}