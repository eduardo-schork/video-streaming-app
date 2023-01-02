import BaseLayout from '@components/base-layout';
import useController from './controller.hook';

import { ListContainer } from './styles';
import VideoCard from './components/video-card/video-card';

function MainPage() {
  const { movies, handleOnClickMovie } = useController();

  return (
    <BaseLayout>
      <ListContainer>
        {movies.map((movie) => (
          <VideoCard onClick={handleOnClickMovie} key={movie.id} movie={movie} />
        ))}
      </ListContainer>
    </BaseLayout>
  );
}

export default MainPage;
