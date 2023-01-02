import { useNavigate } from 'react-router-dom';
import useFindAllMovies from '@hooks/use-find-all-movies.hook';

const useController = () => {
  const { data } = useFindAllMovies();

  const navigate = useNavigate();

  function handleOnClickMovie(id: string) {
    navigate(`/watch/${id}`);
  }

  return { movies: data, handleOnClickMovie };
};

export default useController;
