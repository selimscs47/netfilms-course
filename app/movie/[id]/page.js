import React from "react";
import MovieContainer from "@/containers/movie";
// import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";

// const API_URL = "https://api.themoviedb.org/3";

// const getMovie = async (movieId) => {
//   const res = await fetch
//   (`${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`);
//   return res.json();
// };

async function MoviePage  ({ params, searchParams })  {
 const movieDetail = await getMovie(params.id);
  // const movie= await getMovie(params.id);
  // const movieDetail = Movies.results.find(
  //   (movie) => movie.id.toString() === params.id);

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error");
  }

  return <MovieContainer movieDetail={movieDetail} />;
};

export default MoviePage;
