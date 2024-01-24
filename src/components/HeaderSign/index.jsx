import { Container } from './styles';

import LogoSvg from '../../assets/logo.svg';

export function HeaderSign() {
  return (
    <Container>
        <img
          src={ LogoSvg }
          alt="Imagem de 'polígono azul'."
        />
        <h1>food explorer</h1>
    </Container>
  );
}
