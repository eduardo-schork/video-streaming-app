import Text from '@components/text';
import { Movie } from '@models/movie.model';
import VideoCard from '@components/video-card/video-card';
import styled from 'styled-components';
import Spacings from '@styles/spacings';
import Colors from '@styles/colors';

type RelatedVideosListProps = { onClick?: (id: string) => void; movies?: Movie[] };

function RelatedVideosList({ movies, onClick }: RelatedVideosListProps) {
  if (!movies) return <RelatedVideosContainer />;

  return (
    <RelatedVideosContainer>
      {/* TODO i18n */}
      <Text variant={'button'}>Related</Text>
      {movies.map((movie) => (
        <VideoCardSpaced key={movie.id} elevation={0} movie={movie} onClick={onClick} />
      ))}
    </RelatedVideosContainer>
  );
}

const RelatedVideosContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 2%;
  flex-direction: column;
  width: 20%;
`;

const VideoCardSpaced = styled(VideoCard)`
  && {
    border: none;
    display: flex;
    margin-top: ${Spacings.extraLarge};
    background-color: ${Colors.transparent};
  }
`;

export default RelatedVideosList;
