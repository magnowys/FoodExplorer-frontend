import { useState, useEffect } from 'react';
import{ useNavigate, useLocation } from 'react-router-dom';

import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';

import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function AdminDesktopHeader({ onChange, ...rest }) {
  const { signOut } = useAuth(); 

  const location = useLocation();

  const [ordersAmount, setOrdersAmount] = useState([]);

  const navigate = useNavigate();

  const [searchVisible, setSearchVisible] = useState(false);

  function handleSignOut() {
    navigate("/"); 
    signOut(); 
  }

  function handleNewDishButton() { 
    navigate("/new"); 
  }

  function handleAllOrdersButton() { 
    navigate("/orders"); 
  }

  useEffect(() => {
    async function fetchOrders () {
        const response = await api.get("/orders");
        setOrdersAmount(response.data);
    }
    fetchOrders();
}, [ordersAmount.length]);

  return (
    <Container>
      <div className={`box ${searchVisible ? 'centered' : 'spaced'}`}>

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
          className="newDishButton" 
          onClick={handleNewDishButton} 
          >
            <p>Novo prato</p>
          </button>
          
          <div className="ordersButton">
            <img className="receiptSvg"
              src={ ReceiptSvg }
              alt="Imagem de 'recibo/recebido'."
            />
            <button className="ordersButtonButton"
            type="button"
            onClick={handleAllOrdersButton}
            >
              <p>Pedidos ({ordersAmount.length})</p>
            </button> 
          </div>
        
          <button
          type="button"
          className="signOutButton"
          onClick={handleSignOut}>
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