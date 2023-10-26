import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

const MoviePage = ({ params }) => {
  const movieDetail = Movies.results.find((movie) => movie.id.toString() == params.id);
  if (!movieDetail) {
    return <div>dasdasds</div>;
  }

  return <MovieContainer movieDetail={movieDetail} />;
};

export default MoviePage;
