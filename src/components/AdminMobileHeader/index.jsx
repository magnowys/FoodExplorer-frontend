import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import MenuSvg from '../../assets/menu.svg';
import LogoSvg from '../../assets/logo.svg';

export function AdminMobileHeader() {
  const navigate = useNavigate();

  function handleOpenMenu() { 
    navigate("/menu"); 
  }

  return (
    <Container>
      
        <button>
          <img className="menuSvg"
            src={ MenuSvg }
            alt="Imagem de 'menu'."
            onClick={handleOpenMenu}
          />
        </button>
        
        <div className="title">
          <img className="logoSvg"
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />

          <div className="wrapper">
            <h1>Food explorer</h1>
            <p>admin</p>
          </div>
        </div> 
      
    </Container>
  );
}
