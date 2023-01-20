import Text from '@components/text';
import { Movie } from '@shared/models/movie.model';
import VideoCard from '@components/video-card/video-card';
import styled from 'styled-components';
import Spacings from '@styles/spacings';
import Colors from '@styles/colors';
import t from '@shared/i18n';

type RelatedVideosListProps = { onClick?: (id: string) => void; movies?: Movie[] };

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

function RelatedVideosList({ movies, onClick }: RelatedVideosListProps) {
  if (!movies) return <RelatedVideosContainer />;

  return (
    <RelatedVideosContainer>
      {/* TODO i18n */}
      <Text variant={'button'}>{t('related')}</Text>
      {movies.map((movie) => (
        <VideoCardSpaced key={movie.id} elevation={0} movie={movie} onClick={onClick} />
      ))}
    </RelatedVideosContainer>
  );
}

export default RelatedVideosList;
