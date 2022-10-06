import Button from "../Button";
import * as S from "./styled";

type CardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Card({ id, image, price, title }: CardProps) {
  console.log();
  return (
    <S.CardBox key={id}>
      <S.Img src={image} />
      <S.Title>{title}</S.Title>
      <S.Price>R$ {price}</S.Price>
      <Button isAddToCar text="ADICIONAR AO CARRINHO" onClick={() => {}} />
    </S.CardBox>
  );
}
