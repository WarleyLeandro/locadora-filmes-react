import { formatPrice } from "../../util/format";
import * as S from "./styled";

type CardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  cartItemsAmount?: number;
  onClick(): void;
};

export default function Card({
  id,
  image,
  price,
  title,
  cartItemsAmount,
  onClick,
}: CardProps) {
  return (
    <S.CardBox key={id}>
      <S.Img src={image} />
      <S.Title>{title}</S.Title>
      <S.Price>{formatPrice(price)}</S.Price>
      <S.Button onClick={() => onClick()}>
        <S.TitleAdd>
          <S.Icon src={require("../../assets/car.png")}></S.Icon>
          <S.TitleAdd style={{ padding: 6 }}>{cartItemsAmount}</S.TitleAdd>

          {"ADICIONAR AO CARRINHO"}
        </S.TitleAdd>
      </S.Button>
    </S.CardBox>
  );
}
