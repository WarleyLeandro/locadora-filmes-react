import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface updateMovieAmount {
  movieId: number;
  amount: number;
}

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
    console.log("carrinho -->", cart);
    loadMovies();
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  const addMovie = async (movieId: number) => {
    const productAlreadyInCart = cart.find((product) => product.id === movieId);

    if (!productAlreadyInCart) {
      const movie = movies.find((movie) => movie.id === movieId);
      // @ts-ignore:next-line
      const newMovie: Product = { ...movie, amount: 1 };

      setCart([...cart, newMovie]);

      return;
    }

    if (productAlreadyInCart) {
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
    const movieExists = cart.some((cartProduct) => cartProduct.id === movieId);
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
  console.log("carrinho ==>", cart);
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
