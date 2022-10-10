import { createContext, useContext, useEffect, useState } from "react";
import {
  Movie,
  CartProviderProps,
  updateMovieAmount,
} from "../@types/movie.inteface";

interface CartContextData {
  cart: Movie[];
  movies: Movie[];
  clearCart: () => void;
  addMovie: (movieId: number) => Promise<void>;
  removeMovie: (movieId: number) => void;
  updateMovieAmount: ({ movieId, amount }: updateMovieAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Movie[]>(() => []);
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

  function loadMovies() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        const response = res.map((movie: Movie) => {
          return { ...movie, amount: 0 };
        });
        setMovies(response);
      });
  }

  useEffect(() => {
    loadMovies();
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  const addMovie = async (movieId: number) => {
    const movieAlreadyInCart = cart.find((movie) => movie.id === movieId);

    if (!movieAlreadyInCart) {
      const movie = movies.find((movie) => movie.id === movieId);
      // @ts-ignore:next-line
      const newMovie: Movie = { ...movie, amount: 1 };

      setCart([...cart, newMovie]);

      return;
    }

    if (movieAlreadyInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === movieId
          ? {
              ...cartItem,
              amount: Number(cartItem.amount) + 1,
            }
          : cartItem
      );

      setCart(updatedCart);
    } else {
    }
  };

  const removeMovie = (movieId: number) => {
    const movieExists = cart.some((movie) => movie.id === movieId);
    if (!movieExists) {
      return;
    }

    const updatedCart = cart.filter((cartItem) => cartItem.id !== movieId);
    setCart(updatedCart);
  };

  const updateMovieAmount = async ({ movieId, amount }: updateMovieAmount) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === movieId
        ? {
            ...cartItem,
            amount: amount,
          }
        : cartItem
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        movies,
        cart,
        clearCart,
        addMovie,
        removeMovie,
        updateMovieAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
