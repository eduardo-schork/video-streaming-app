import Text from '@components/text';
import Colors from '@styles/colors';
import styled from 'styled-components';

export const VideoContainer = styled.video`
  max-width: 100%;
  max-height: 75vh;
  height: 75vh;
`;

export const VideoSource = styled.source``;

export const TitleText = styled(Text)`
  color: ${Colors.white};
`;

export const VideoInfoContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const VideoTitleContainer = styled.div`
  padding: 2%;
  display: flex;
  width: 80%;
  flex-direction: column;
`;
