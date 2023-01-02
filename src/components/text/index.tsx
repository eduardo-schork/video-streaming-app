import React from 'react';

import { Typography } from '@mui/material';

import { Variant } from '@mui/material/styles/createTypography';

function Text({ variant, children, ...props }: { variant?: Variant; children: React.ReactNode }): JSX.Element {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
}

export default Text;
