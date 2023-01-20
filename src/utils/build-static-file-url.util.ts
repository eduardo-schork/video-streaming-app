import { Movie } from '@shared/models/movie.model';

function buildStaticFileUrl(movie: Movie, index: number) {
  if (!movie?.snapshots) return null;

  const movieSnapshotPath = movie?.snapshots[index];

  const url = `${import.meta.env.VITE_API_URL}/static/${movie.id}/${movieSnapshotPath}`;

  return url;
}

export default buildStaticFileUrl;
