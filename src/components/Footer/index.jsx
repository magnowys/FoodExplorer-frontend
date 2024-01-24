import { Container } from './styles';

import LogoFooterSvg from '../../assets/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <div id="logo">
        <img
            src={ LogoFooterSvg }
            alt="Imagem de 'polígono cinza'."
          />
        <p>food explorer</p>
      </div>
      
      <div id="copyright">
        <p>&copy;  2023 - Todos os direitos reservados</p>
      </div>
    </Container>
  );
}