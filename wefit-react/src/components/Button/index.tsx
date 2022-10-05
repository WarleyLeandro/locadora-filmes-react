import React from "react";

import * as S from "./styled";

type ButtonProps = {
  text: string;
  onClick(): void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <S.Button onClick={() => onClick()}>
      <S.Title>{text}</S.Title>
    </S.Button>
  );
}
