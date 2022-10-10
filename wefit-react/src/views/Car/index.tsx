import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import * as S from "./styled";
import { useCart } from "../../context/cart";
import AlertCard from "../../components/AlertCard";
import { formatPrice } from "../../util/format";
import { Movie } from "../../@types/movie.inteface";

export default function Car() {
  const { cart, clearCart, removeMovie, updateMovieAmount } = useCart();

  const newCar = cart.map((movie) => ({
    ...movie,
    priceFormatted: formatPrice(movie.price),
    subtotal: formatPrice(movie.price * movie.amount),
  }));
  const total = formatPrice(
    newCar.reduce((sumTotal, movie) => {
      sumTotal += movie.price * movie.amount;

      return sumTotal;
    }, 0)
  );

  function handleMovieIncrement(movie: Movie) {
    const IncrementArguments = {
      movieId: movie.id,
      amount: movie.amount + 1,
    };
    updateMovieAmount(IncrementArguments);
  }

  function handleMovieDecrement(movie: Movie) {
    const IncrementArguments = {
      movieId: movie.id,
      amount: movie.amount - 1,
    };
    updateMovieAmount(IncrementArguments);
  }

  function handleRemoveMovie(movieId: number) {
    removeMovie(movieId);
  }

  return (
    <S.Container>
      <Header />
      {cart.length <= 0 ? (
        <AlertCard isCarEmpty />
      ) : (
        <S.ListItens>
          <S.HeaderList>
            <S.Title>PRODUTO</S.Title>
            <S.Title style={{ paddingLeft: 40 }}>QTD</S.Title>
            <S.Title>SUBTOTAL</S.Title>
          </S.HeaderList>

          <S.Content>
            {newCar.map((movie) => (
              <S.ContainerCard key={movie.id}>
                <S.ImgCard src={movie.image} alt={movie.title} />
                <S.ContentCard>
                  <S.PriceCard> {movie.title}</S.PriceCard>
                  <S.PriceCard>{movie.priceFormatted}</S.PriceCard>
                </S.ContentCard>
                <S.ContentButtons>
                  <S.ButtonCard
                    onClick={() => handleMovieDecrement(movie)}
                    disabled={movie.amount <= 1}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </S.ButtonCard>

                  <S.InputCard value={movie.amount} />

                  <S.ButtonCard onClick={() => handleMovieIncrement(movie)}>
                    <MdAddCircleOutline size={20} />
                  </S.ButtonCard>
                </S.ContentButtons>
                <S.SubPriceCard>{movie.subtotal}</S.SubPriceCard>
                <S.ButtonCard onClick={() => handleRemoveMovie(movie.id)}>
                  <MdDelete size={20} />
                </S.ButtonCard>
              </S.ContainerCard>
            ))}
          </S.Content>

          <S.Underline />
          <S.FooterList>
            <Link to="/finished" onClick={() => clearCart()}>
              <Button text="FINALIZAR PEDIDO" onClick={() => {}} />
            </Link>
            <S.BoxPrice>
              <S.Title>Total</S.Title>

              <S.TotalPrice>{total}</S.TotalPrice>
            </S.BoxPrice>
          </S.FooterList>
        </S.ListItens>
      )}
    </S.Container>
  );
}
