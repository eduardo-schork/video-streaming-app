import React from 'react';

import { Typography, TypographyProps } from '@mui/material';
import Colors from '@styles/colors';

interface ITextProps extends TypographyProps {
  children: React.ReactNode;
  color?: Colors;
}

function Text({ color, children, ...props }: ITextProps): JSX.Element {
  return (
    <Typography color={color || Colors.white} {...props}>
      {children}
    </Typography>
  );
}

export default Text;
