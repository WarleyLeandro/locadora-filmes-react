import { Link } from "react-router-dom";

import Button from "../Button";

import * as S from "./styled";

type AlertCardProps = {
  isCarEmpty?: boolean;
};

export default function AlertCard({ isCarEmpty }: AlertCardProps) {
  return isCarEmpty ? (
    <S.Container>
      <S.Title>Parece que não há nada por aqui :(</S.Title>
      <S.Icon src={require("../../assets/empty-car.png")}></S.Icon>
      <S.Underline />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button text={"Voltar"} onClick={() => {}} />
      </Link>
    </S.Container>
  ) : (
    <S.Container>
      <S.Title>Compra realizada com sucesso!</S.Title>
      <S.Icon
        src={require("../../assets/sucess.png")}
        style={{ marginBottom: "42px" }}
      ></S.Icon>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button text={"Voltar"} onClick={() => {}} />
      </Link>
    </S.Container>
  );
}
