import { MovieApi, normalizeMovie } from './movie.model';

export type MoviesByCategoryApi = {
  _id: string;
  createdAt: number;
  createdBy: string;
  updatedAt?: number;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  title: string;
  movies: MovieApi[];
};

export function normalizeMoviesByCategory(input: MoviesByCategoryApi) {
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

export type MoviesByCategory = ReturnType<typeof normalizeMoviesByCategory>;
