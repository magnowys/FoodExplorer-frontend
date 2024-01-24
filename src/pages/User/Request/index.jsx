import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';
import { useCart } from '../../../hooks/cart';

import { useMediaQuery } from 'react-responsive';

import { FiChevronLeft } from 'react-icons/fi';
import { TbMoodEmpty } from "react-icons/tb";
import { BsCartX } from "react-icons/bs";


import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Container, Content, StyledLink } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 
import { UserRequestCard } from '../../../components/UserRequestCard';

import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";


export function Request() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
 
  const { isLoading, setIsLoading } = useAuth();

  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState("")

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); 
  }

  function handleButtonNext() {
    if(cart.length <= 0) {
      return toast.error("Atenção, carrinho vazio.", {
          position: toast.POSITION.TOP_RIGHT
      });
    }
    navigate("/payment");
    }

    function handleRemoveItem(deletedItemId) {
      setCart((prevState) =>
        prevState.map((item) =>
          item.id === deletedItemId
            ? { ...item, amount: item.amount - 1, total_price: item.total_price - item.unit_price }
            : item
        ).filter((item) => item.amount > 0)
      );
      
    }

  useEffect(() => {
    const carts = cart.map(item => item.total_price);
    const sum = carts.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sum.toFixed(2));
  }, [cart]);
  
  
  return (
      <Container>
        {isMobile ? <UserMobileHeader /> : <UserDesktopHeader onChange={e => setSearch(e.target.value)} />}
        <main>
          <Content>            
            <div className="wrapperBack">
              <ButtonText
                title="Voltar"
                icon={FiChevronLeft }
                onClick={handleBack} 
              />
            </div>            
            <div className="pageTitle">
                <h1>Meu pedido</h1>
            </div>

            <Section>
              {
                isLoading ?
                (
                <div className="loader">
                    <Rings
                        color="#065E7C"
                        width="110"
                        height="110"
                    />
                </div>
                )
            :
            (
              <>
               { cart.length === 0 ? (
                 <div className="emptyList">
                 <div>
                     <p>Lista de Pedidos vazia</p>
                     < TbMoodEmpty  />
                 </div>

                 <div>                                                            
                     <p>Em <StyledLink to="/">Home</StyledLink> você pode selecionar seus pratos e incluí-los em seu pedido!</p>
                     < BsCartX />
                 </div>                
             </div>
          ) : (
                  <ul className="request">
                    { cart.map((item, index) => (
                        <UserRequestCard
                          key={index}
                          data={{
                            title: item.title,
                            imageDish: item.photo,
                            price: item.unit_price,
                            amount: item.amount
                          }}
                        onClick = {() => handleRemoveItem(item.id)}
                        />
                      ))}            
                  </ul>                          
                  )} 
              </>
                )             
              }            
            </Section> 

            <div className="total">
              <h2>{`Total: R$ ${totalPrice}`}</h2>
            </div>                                    
            <footer className="footerButton">
              <div className="buttonNext">
                <Button
                type="button"
                className="buttonNext"
                title="Avançar"
                onClick={handleButtonNext}
                >
                </Button>
              </div>
            </footer>
        
          </Content>
        </main>
        <Footer />
      </Container>    
  )
}