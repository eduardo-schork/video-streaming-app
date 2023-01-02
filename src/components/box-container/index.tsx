import { Paper } from '@mui/material';
import { MouseEventHandler } from 'react';

function BoxContainer({
  classname,
  children,
  onClick,
  ...props
}: {
  classname?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element {
  return (
    <Paper onClick={onClick} className={classname} elevation={1} {...props}>
      {children}
    </Paper>
  );
}

export default BoxContainer;
