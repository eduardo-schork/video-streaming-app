/* eslint-disable jsx-a11y/media-has-caption */
import useController from './controller.hook';
import { Container } from './styles';

function WatchPage() {
  const { videoPath } = useController();

  return (
    <Container>
      {videoPath && (
        <video id={'videoPlayer'} width={'650'} controls autoPlay>
          <source src={videoPath} type={'video/mp4'} />
        </video>
      )}
    </Container>
  );
}

export default WatchPage;
