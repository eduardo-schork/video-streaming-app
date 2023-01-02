import ApiPath from '@constants/api-path.const';
import useFindOneMovie from '@hooks/use-find-one-movies.hook';

import { useParams } from 'react-router-dom';

const useController = () => {
  const { id } = useParams();

  const { data: movie } = useFindOneMovie({ movieId: id });

  const videoPath = id && movie && `${import.meta.env.VITE_API_URL}${ApiPath.stream}/${movie.id}`;

  return { videoPath };
};

export default useController;
