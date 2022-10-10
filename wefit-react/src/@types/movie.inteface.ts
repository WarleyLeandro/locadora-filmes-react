import { ReactNode } from "react";

export interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface updateMovieAmount {
  movieId: number;
  amount: number;
}
