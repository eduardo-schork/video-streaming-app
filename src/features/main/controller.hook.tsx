import useFindAllMoviesGrouped from '@hooks/use-find-all-movies-grouped.hook';
import { useNavigate } from 'react-router-dom';

const useController = () => {
  const { data } = useFindAllMoviesGrouped();

  const navigate = useNavigate();

  function handleOnClickMovie(id: string) {
    navigate(`/watch/${id}`);
  }

  return { moviesGrouped: data, handleOnClickMovie };
};

export default useController;
