import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie.ts";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

interface MovieGridProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div className={css.card}>
            <img
              onClick={() => onSelect(movie)}
              className={css.image}
              src={`${BASE_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
