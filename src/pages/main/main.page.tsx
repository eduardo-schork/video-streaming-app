import BaseLayout from '@components/base-layout';
import useController from './controller.hook';
import VideosList from './components/videos-list/videos-list';

function MainPage() {
  const { moviesGrouped, handleOnClickMovie } = useController();

  return (
    <BaseLayout>
      <VideosList handleOnClickMovie={handleOnClickMovie} moviesGrouped={moviesGrouped} />
    </BaseLayout>
  );
}

export default MainPage;
