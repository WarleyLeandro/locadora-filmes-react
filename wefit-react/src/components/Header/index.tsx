import { Link } from "react-router-dom";
import { useCart } from "../../context/cart";

import * as S from "./styled";

export default function Header() {
  const { cart } = useCart();
  return (
    <S.HeaderBox>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Title>WeMovies</S.Title>
      </Link>
      <Link to="/car" style={{ textDecoration: "none" }}>
        <S.BoxCarButton>
          <S.BoxCarButtonText>
            <S.MyCarText>Meu Carrinho</S.MyCarText>
            <S.ItemText>
              {cart.length} {cart.length === 1 ? "item" : "itens"}
            </S.ItemText>
          </S.BoxCarButtonText>
          <S.Icon src={require("../../assets/bag.png")}></S.Icon>
        </S.BoxCarButton>
      </Link>
    </S.HeaderBox>
  );
}
