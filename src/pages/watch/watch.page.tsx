import BaseLayout from '@components/base-layout';

import useController from './controller.hook';

import { TitleText, VideoContainer, VideoInfoContainer, VideoSource, VideoTitleContainer } from './styles';
import RelatedVideosList from './related-videos-list';
import Spacings from '@styles/spacings';
import Colors from '@styles/colors';
import Text from '@components/text';
import Divider from '@components/divider';

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
              display: 'flex',
              background: Colors.whiteGrey,
              height: '100%',
              borderRadius: Spacings.medium,
              flexDirection: 'column',
              padding: '2%',
            }}
          >
            {commentsByMovie.map((comment) => {
              return (
                <div style={{ padding: '1% 0%' }}>
                  <Text>{comment.text}</Text>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <Text>{comment.createdBy}</Text>
                    {/* <Divider orientation={'vertical'} /> */}
                    <Text>{comment.createdAt}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </VideoTitleContainer>

        <RelatedVideosList onClick={handleOnClickMovie} movies={relatedVideos?.movies} />
      </VideoInfoContainer>
    </BaseLayout>
  );
}

export default WatchPage;
