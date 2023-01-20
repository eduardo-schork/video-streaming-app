import Colors from '@styles/colors';
import Spacings from '@styles/spacings';
import BaseLayout from '@components/base-layout';

import { TitleText, VideoContainer, VideoInfoContainer, VideoSource, VideoTitleContainer } from './styles';

import useController from './controller.hook';
import RelatedVideosList from './related-videos-list';
import CommentsList from './comments-list/comments-list';

function WatchPage() {
  const { videoPath, movie, relatedVideos, handleOnClickMovie, commentsByMovie } = useController();

  return (
    <BaseLayout>
      {/* TODO atomize video container */}
      {videoPath && (
        <VideoContainer id={'video-player'} controls autoPlay>
          <VideoSource src={videoPath} type={'video/mp4'} />
        </VideoContainer>
      )}
      <VideoInfoContainer>
        <VideoTitleContainer>
          {/* TODO atomize components */}
          <div style={{ marginBottom: '2%' }}>
            <TitleText variant={'h5'}>{movie?.title}</TitleText>
            <TitleText variant={'h6'}>{movie?.description}</TitleText>
          </div>
          <div
            style={{
              background: Colors.whiteGrey,
              borderRadius: Spacings.extraLarge,
            }}
          >
            <CommentsList comments={commentsByMovie} />
          </div>
        </VideoTitleContainer>

        <RelatedVideosList onClick={handleOnClickMovie} movies={relatedVideos?.movies} />
      </VideoInfoContainer>
    </BaseLayout>
  );
}

export default WatchPage;
