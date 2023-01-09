import BaseLayout from '@components/base-layout';

import useController from './controller.hook';

import { TitleText, VideoContainer, VideoInfoContainer, VideoSource } from './styles';
import VideoCard from '@components/video-card/video-card';

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
        <div>
          <TitleText variant={'h5'}>{movie?.title}</TitleText>
          <TitleText variant={'h6'}>{movie?.description}</TitleText>
        </div>
        <div style={{ height: '100%', width: '30%' }}>
          {/* {relacionatedVideos?.movies &&
            relacionatedVideos.movies.map((movie) => {
              return <VideoCard movie={movie} onClick={() => {}} />;
            })} */}
        </div>
      </VideoInfoContainer>
    </BaseLayout>
  );
}

export default WatchPage;
