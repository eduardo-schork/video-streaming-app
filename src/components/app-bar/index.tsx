import LogoPng from '@assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Container, LogoImage } from './styles';
import TextInput from '../text-input';

function AppBar(): JSX.Element {
  const navigate = useNavigate();

  function handleOnClickLogo() {
    navigate(`/`);
  }

  return (
    <Container>
      <LogoImage onClick={handleOnClickLogo} alt={'logo'} src={LogoPng} />
      <TextInput />
      {/* TODO fix this */}
      <div style={{ width: '12%' }} />
    </Container>
  );
}

export default AppBar;
