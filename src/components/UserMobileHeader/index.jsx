import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/cart';

import { Container } from './styles';

import MenuSvg from '../../assets/menu.svg';
import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';

export function UserMobileHeader() {
  const { cart } = useCart();
  const navigate = useNavigate();

  function handleOpenMenu() { 
    navigate("/menu"); 
  }

  function handleButtonRequest() { 
    navigate("/request"); 
  }

  return (
    <Container>
  
       <button className="buttonMenu">
          <img className="menuSvg"
            src={ MenuSvg }
            alt="Imagem de 'menu'."
            onClick={handleOpenMenu}
          />
        </button>

        <div className="title">
          <img
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />
          
            <h1>Food explorer</h1>

        </div> 
       
         <button className="requestButton" type="button" onClick={handleButtonRequest}>
          {cart.length > 0 && <span className="badge">{cart.length}</span>}
          <img className="receiptSvg" src={ReceiptSvg} alt="Imagem de 'recibo'." />
        </button>   
       
    </Container>
  );
}
