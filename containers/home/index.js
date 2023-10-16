import React from "react";

import movies from "@/mocks/movies.json";
import { FeaturedMovie } from "@/components/featured-movie";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={movies.results[0]} />
    </div>
  );
}

export default HomeContainer;
