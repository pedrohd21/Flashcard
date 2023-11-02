import React from "react";
import { MainTitle, SubTitle, Container } from "./styles";

type Props = {
  mainTitle: string;
  subTitle: string;

}

export function Title({ mainTitle, subTitle }: Props) {
  return (
    <Container>
      <MainTitle>
        {mainTitle}
      </MainTitle>

      <SubTitle
        placeholder={subTitle}
      />
    </Container>

  )
}