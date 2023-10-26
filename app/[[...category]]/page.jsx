


import React from "react";
import HomeContainer from "@/containers/home";
// Assuming Movies is imported correctly and is an object or an array with results property
import Movies from "@/mocks/movies.json";

function HomePage({ params }) {
  let selectedCategory ;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }



  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
