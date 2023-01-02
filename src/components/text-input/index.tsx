import { StandardTextFieldProps, TextField, TextFieldProps } from '@mui/material';
import Colors from '@styles/colors';
import Spacings from '@styles/spacings';
import styled from 'styled-components';

const BaseTextInput = styled(TextField)`
  && {
    display: flex;
    margin: auto;
    width: 60%;
    max-height: 75%;
    border-radius: ${Spacings.medium};
    background-color: ${Colors.white};
  }
`;

function TextInput({ ...props }: StandardTextFieldProps): JSX.Element {
  return (
    <BaseTextInput
      {...props}
      inputProps={{
        style: {
          padding: Spacings.extraLarge,
        },
      }}
    />
  );
}

export default TextInput;
