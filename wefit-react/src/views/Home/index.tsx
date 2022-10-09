import Card from "../../components/Card";
import Header from "../../components/Header";
import { useCart } from "../../context/cart";
import * as S from "./styled";

interface CartItemsAmount {
  [key: number]: number;
}
export default function Home() {
  const { addMovie, cart, movies } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, movie) => {
    sumAmount[movie.id] = movie.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  function handleAddProduct(id: number) {
    addMovie(id);
  }

  return (
    <S.Container>
      <Header />
      <S.ListBox>
        {movies &&
          movies.map((movie, index) => {
            return (
              <Card
                title={movie.title}
                price={movie.price}
                id={movie.id}
                image={movie.image}
                cartItemsAmount={cartItemsAmount[movie.id] || 0}
                onClick={() => handleAddProduct(movie.id)}
                key={`${index}-${movie.id}`}
              />
            );
          })}
      </S.ListBox>
    </S.Container>
  );
}
