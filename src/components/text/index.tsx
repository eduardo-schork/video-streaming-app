import React from 'react';

import { Typography, TypographyProps } from '@mui/material';

interface ITextProps extends TypographyProps {
  children: React.ReactNode;
}

function Text({ children, ...props }: ITextProps): JSX.Element {
  return <Typography {...props}>{children}</Typography>;
}

export default Text;
