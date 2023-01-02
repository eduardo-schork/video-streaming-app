import Text from '@components/text';
import Colors from '@styles/colors';
import styled from 'styled-components';

export const VideoContainer = styled.video`
  max-width: 100%;
  max-height: 100%;
  height: 60%;
`;

export const VideoSource = styled.source``;

export const TitleText = styled(Text)`
  color: ${Colors.white};
`;

export const VideoInfoContainer = styled.div`
  width: 100%;
  padding: 1% 1%;
`;
