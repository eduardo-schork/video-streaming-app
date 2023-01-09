import useFindAllMoviesByCategory from '@hooks/movies/use-find-all-movies-by-category.hook';
import { useNavigate } from 'react-router-dom';

const useController = () => {
  const { data } = useFindAllMoviesByCategory();

  const navigate = useNavigate();

  function handleOnClickMovie(id: string) {
    navigate(`/watch/${id}`);
  }

  return { moviesGrouped: data, handleOnClickMovie };
};

export default useController;
