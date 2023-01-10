import { Divider as MaterialDivider, DividerProps } from '@mui/material';
import styled from 'styled-components';

const StyledDivider = styled(MaterialDivider)`
  && {
    color: blue;
    background-color: red;
    display: flex;
  }
`;

function Divider({ ...props }: DividerProps): JSX.Element {
  return <StyledDivider {...props} />;
}

export default Divider;
