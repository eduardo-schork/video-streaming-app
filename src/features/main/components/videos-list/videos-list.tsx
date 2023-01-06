import { CategoryListContainer, CategoryTitle } from './styles';
import { VideosListProps } from './types';
import VideoListItem from './video-list-item/video-list-item';

function VideosList({ moviesGrouped, handleOnClickMovie }: VideosListProps): JSX.Element {
  return (
    <>
      {moviesGrouped.map((category) => (
        <CategoryListContainer key={category.id}>
          <CategoryTitle variant={'h6'}>{category.title}</CategoryTitle>
          <VideoListItem movieGrouped={category} handleOnClickMovie={handleOnClickMovie} />
        </CategoryListContainer>
      ))}
    </>
  );
}

export default VideosList;
