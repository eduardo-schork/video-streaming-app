import useFindOneMovie from '@hooks/use-find-one-movies.hook';
import ApiRoutes from '@constants/api-routes';

import { useParams } from 'react-router-dom';

const useController = () => {
  const { id } = useParams();

  const { data: movie } = useFindOneMovie({ movieId: id });

  const videoPath = id && movie && `${import.meta.env.VITE_API_URL}${ApiRoutes.STREAM}/${movie.id}`;

  return { videoPath, movie };
};

export default useController;
