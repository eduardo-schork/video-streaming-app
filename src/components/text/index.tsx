import React from 'react';

import { Typography, TypographyProps } from '@mui/material';
import Colors from '@styles/colors';

interface ITextProps extends TypographyProps {
  children: React.ReactNode;
  color?: Colors;
  bold?: boolean;
  center?: boolean;
}

function Text({ color, children, bold, style, center, ...props }: ITextProps): JSX.Element {
  return (
    <Typography
      color={color || Colors.white}
      style={{ fontWeight: bold ? 'bolder' : 'normal', alignSelf: center ? 'center' : '', ...style }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default Text;
