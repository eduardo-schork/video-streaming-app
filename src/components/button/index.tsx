import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Colors from '@styles/colors';
import Spacings from '@styles/spacings';

type ButtonVariants = 'text' | 'contained' | 'outlined';

const StyledButton = styled.button<ButtonProps>`
  color: ${Colors.white};
  text-decoration: none;
  padding: 8px 26px;
  font-size: 16px;
  border-radius: ${Spacings.medium};
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  text-transform: uppercase;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);

  ${(props) => {
    switch (props.variant) {
      case 'outlined':
        return css`
          background-color: ${Colors.transparent};
          border: none;
          box-shadow: inset 0px 0px 0px 2px ${Colors.primary};
        `;
      case 'contained':
        return css`
          background-color: ${Colors.primary};
          border: none;
        `;
      default:
        return css`
          background-color: ${Colors.transparent};
          border: none;
          box-shadow: none;
        `;
    }
  }}

  :active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
