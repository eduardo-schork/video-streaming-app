import ApiRoutes from '@constants/api-routes';
import useFindOneMovie from '@hooks/movies/use-find-one-movies.hook';

import { useParams } from 'react-router-dom';

const useController = () => {
  const { id } = useParams();

  const { data: movie } = useFindOneMovie({ movieId: id });

  const videoPath = id && movie && `${import.meta.env.VITE_API_URL}${ApiRoutes.STREAM}/${movie.id}`;

  return { videoPath, movie };
};

export default useController;
