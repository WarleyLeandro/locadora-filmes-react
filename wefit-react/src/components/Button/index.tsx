import React, { useState } from "react";

import * as S from "./styled";

type ButtonProps = {
  text: string;
  isAddToCar?: boolean;
  onClick(): void;
};

export default function Button({ text, isAddToCar, onClick }: ButtonProps) {
  const [count, setCount] = useState<number>(0);
  return (
    <S.Button
      onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}
    >
      {isAddToCar ? (
        <S.TitleAdd>
          <S.Icon src={require("../../assets/car.png")}></S.Icon>
          <S.TitleAdd style={{ padding: 6 }}>{count}</S.TitleAdd>

          {text}
        </S.TitleAdd>
      ) : (
        <S.Title>{text}</S.Title>
      )}
    </S.Button>
  );
}
