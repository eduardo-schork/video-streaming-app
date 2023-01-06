import BaseLayout from '@components/base-layout';
import useController from './controller.hook';
import { Container } from './styles';
import VideosList from './components/videos-list/videos-list';

function MainPage() {
  const { moviesGrouped, handleOnClickMovie } = useController();

  return (
    <BaseLayout>
      <Container>
        <VideosList handleOnClickMovie={handleOnClickMovie} moviesGrouped={moviesGrouped} />
      </Container>
    </BaseLayout>
  );
}

export default MainPage;
