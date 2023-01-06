import { Category } from './category.model';
import { Movie, MovieModelApi, normalizeMovie } from './movie.model';

export type MoviesGroupedModelApi = {
  _id: string;
  createdAt: number;
  createdBy: string;
  updatedAt?: number;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  title: string;
  movies: MovieModelApi[];
};

export function normalizeMovieGrouped(input: MoviesGroupedModelApi) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: input?._id,
    createdAt: input?.createdAt,
    createdBy: input?.createdBy,
    deletedAt: input?.deletedAt,
    title: input?.title,
    movies: input?.movies.map((movie) => normalizeMovie(movie)),
  };
}

export type MovieGrouped = ReturnType<typeof normalizeMovieGrouped>;
