import BaseLayout from '@components/base-layout';

import useController from './controller.hook';

import { TitleText, VideoContainer, VideoInfoContainer, VideoSource } from './styles';

function WatchPage() {
  const { videoPath, movie } = useController();

  return (
    <BaseLayout>
      {/* TODO atomize video container */}
      {videoPath && (
        <VideoContainer id={'videoPlayer'} controls autoPlay>
          <VideoSource src={videoPath} type={'video/mp4'} />
        </VideoContainer>
      )}
      <VideoInfoContainer>
        <TitleText variant={'h5'}>{movie?.title}</TitleText>
      </VideoInfoContainer>
    </BaseLayout>
  );
}

export default WatchPage;
