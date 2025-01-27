/* eslint-disable react/prop-types */
import Movie from "./Movie";

export default function MoviesList({ movies }) {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie key={movie.name} movie={movie} />
        ))}
      </ul>
    </>
  );
}
