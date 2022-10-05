import React from "react";
import AlertCard from "../../components/AlertCard";
import Header from "../../components/Header";
import * as S from "./styled";

export default function Car() {
  return (
    <S.Container>
      <Header />

      <AlertCard />
    </S.Container>
  );
}
