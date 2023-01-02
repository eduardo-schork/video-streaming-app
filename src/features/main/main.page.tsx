import useController from './controller.hook';

import VideoCard from './components/video-card';

import { Container, ListContainer } from './styles';

function MainPage() {
  const { movies, handleOnClickMovie } = useController();

  return (
    <Container>
      <ListContainer>
        {movies.map((movie) => (
          <VideoCard onClick={handleOnClickMovie} key={movie.id} movie={movie} />
        ))}
      </ListContainer>
    </Container>
  );
}

export default MainPage;
