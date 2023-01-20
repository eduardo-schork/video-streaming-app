import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Button from '../button';

const StyledIconButton = styled(Button)`
  && {
    padding: 4px;
    border-radius: 50%;
    justify-content: center;
    align-self: center;

    :hover {
      background: rgba(255, 255, 255, 0.034);
    }
  }
`;

// TODO implement icon inside the component not from children prop
function IconButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
}

export default IconButton;
