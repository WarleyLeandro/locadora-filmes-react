import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import * as S from "./styled";

interface CardMovie {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [movies, setMovies] = useState<CardMovie[]>([] as CardMovie[]);

  function loadMovies() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      });
  }

  useEffect(() => {
    loadMovies();
  }, []);

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
                key={`${index}-${movie.id}`}
              />
            );
          })}
      </S.ListBox>
    </S.Container>
  );
}
