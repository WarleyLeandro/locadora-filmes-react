import { Link } from "react-router-dom";

import * as S from "./styled";

export default function Header() {
  const qtdeItensOfCar = 0;
  return (
    <S.HeaderBox>
      <S.Title>WeMovies</S.Title>
      <Link to="/car">
        <S.BoxCarButton>
          <S.BoxCarButtonText onClick={() => console.log("sssssssss")}>
            <S.MyCarText>Meu Carrinho</S.MyCarText>
            <S.ItemText>{qtdeItensOfCar} itens</S.ItemText>
          </S.BoxCarButtonText>
          <S.Icon src={require("../../assets/bag.png")}></S.Icon>
        </S.BoxCarButton>
      </Link>
    </S.HeaderBox>
  );
}