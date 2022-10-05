import * as S from "./styled";

export default function Header() {
  const qtdeItensOfCar = 0;
  return (
    <S.HeaderBox>
      <S.Title>WeMovies</S.Title>
      <S.BoxCarButton>
        <S.BoxCarButtonText onClick={() => console.log("sssssssss")}>
          <S.MyCarText>Meu Carrinho</S.MyCarText>
          <S.ItemText>{qtdeItensOfCar} itens</S.ItemText>
        </S.BoxCarButtonText>
        <S.Icon src={require("../../assets/bag.png")}></S.Icon>
      </S.BoxCarButton>
    </S.HeaderBox>
  );
}
