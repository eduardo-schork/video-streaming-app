import { Paper, PaperProps } from '@mui/material';
import { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBoxContainerProps extends PaperProps {
  classname?: string;
}

function BoxContainer({ classname, children, onClick, elevation, ...props }: IBoxContainerProps): JSX.Element {
  return (
    <Paper onClick={onClick} className={classname} elevation={elevation || 1} {...props}>
      {children}
    </Paper>
  );
}

export default memo(BoxContainer);
