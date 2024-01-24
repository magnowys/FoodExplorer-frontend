import{ useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function UserDesktopHeader({ onChange }) {
  const { signOut, user } = useAuth(); 
  
  const { cart } = useCart();

  const navigate = useNavigate();

  const location = useLocation();

  const [searchVisible, setSearchVisible] = useState(false);

  function handleButtonFavorites() { 
    navigate("/favorites"); 
  }

  function handleButtonRequest() { 
    navigate("/request"); 
  }

  function handleButtonHistoric() { 
    navigate(`/historic/${user.id}`); 
  }
  
  function handleSignOut() { 
    navigate("/"); 
    signOut(); 
  }

  return (
    <Container>
      <div className={`box ${searchVisible ? 'centered' : 'spaced'}`}>

        <div className="title">
          <img
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />
          <h1>Food explorer</h1>
        </div> 

        {
          (location.pathname === "/" || location.pathname === "/menu") ? (
            <div className="search">
              <img
                src={ SearchSvg }
                alt="Imagem de 'lupa'."
              />
              <Search
                type="text"
                placeholder="Busque por pratos ou ingredientes."
                onChange={onChange}
              />
            </div>
          )
          :
          (
            <div className="replacementForSearch">
            </div>
          )
        }

      <div>
        <button 
        type="button" 
        className="favoritesButton" 
        onClick={handleButtonFavorites}
        >
          <p>Favoritos</p>
        </button>

        <button 
        type="button" 
        className="historicButton" 
        onClick={handleButtonHistoric}
        >
          <p>Histórico de pedidos</p>
        </button>
        
        <div className="requestButton">
          <img className="receiptSvg"
            src={ ReceiptSvg }
            alt="Imagem de 'recibo'."
          />
          <button className="requestButtonButton"
          type="button"
          onClick={handleButtonRequest}
          >
            <p>Pedidos ({cart.length})</p>
          </button> 
        </div>

        <button type="button" className="signOutButton" onClick={handleSignOut}>
          <img className="signOutSvg"
            src={SignOutSvg}
            alt="Imagem de 'colchete com seta indicando para fora'."
          />
        </button>
      </div>
        
      </div>
    </Container>
  );
}