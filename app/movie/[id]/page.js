import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

const MoviePage = ({ params }) => {
  const movieDetail = Movies.results.find((movie) => movie.id.toString() == params.id);
  if (!movieDetail) {
    // return <div></div>;
  };

  if (!movieDetail){
    notFound()
  }

  return <MovieContainer movieDetail={movieDetail} />;
};

export default MoviePage;
