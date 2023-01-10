import ApiRoutes from '@constants/api-routes';
import useFindOneMovie from '@hooks/movies/use-find-one-movies.hook';
import useFindOneMoviesByCategory from '@hooks/movies/use-find-one-movies-by-category.hook';
import useFindAllCommentsByMovie from '@hooks/comments/use-find-all-comments-by-movie.hook';

import { useNavigate, useParams } from 'react-router-dom';

const useController = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: movie } = useFindOneMovie({ movieId: id });

  const mainCategory = movie?.categories && movie?.categories[0];

  const { data: relatedVideos } = useFindOneMoviesByCategory({ categoryId: mainCategory?.id });

  const videoPath = id && movie && `${import.meta.env.VITE_API_URL}${ApiRoutes.STREAM}/${movie.id}`;

  const { data: commentsByMovie } = useFindAllCommentsByMovie({ movieId: id });

  function handleOnClickMovie(id: string) {
    navigate(`/watch/${id}`);
  }

  return { videoPath, movie, relatedVideos, handleOnClickMovie, commentsByMovie };
};

export default useController;
