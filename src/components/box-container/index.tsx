import { Paper, PaperProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBoxContainerProps extends PaperProps {
  classname?: string;
}

function BoxContainer({ classname, children, onClick, ...props }: IBoxContainerProps): JSX.Element {
  return (
    <Paper onClick={onClick} className={classname} elevation={1} {...props}>
      {children}
    </Paper>
  );
}

export default BoxContainer;
