import React from 'react';
import AppBar from '../app-bar';
import { Container, Content } from './styles';

function BaseLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Container>
      <AppBar />
      <Content>{children}</Content>
    </Container>
  );
}
export default BaseLayout;
