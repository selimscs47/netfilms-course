import React from "react";
import HomeContainer from "@/containers/home";

import {
getSingleCategory,
getCategories,
getPopularMovies,
getTopRatedMovies} from "@/services/movie";

//  import Movies from "@/mocks/movies.json";

// const API_URL = "https://api.themoviedb.org/3";


async function HomePage({ params }) {
  let selectedCategory;

  const [
    { results: topRatedMovies }, 
    { results: popularMovies }, 
    { genres: categories },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;

