import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useCart } from '../../../hooks/cart';
import { useAuth } from "../../../hooks/auth";

import { useMediaQuery } from 'react-responsive';

import { FiChevronLeft } from 'react-icons/fi';
import PixSvg from '../../../assets/pix.svg';
import CardSvg from '../../../assets/card.svg';
import ImageQrCodePng from '../../../assets/qrcode.png';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';


import { Container, Content } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 
import { UserRequestCard } from './../../../components/UserRequestCard';

import { AiOutlineCheckCircle } from "react-icons/ai";

import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";


export function Payment() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const { user, isLoading, setIsLoading } = useAuth();
  const { cart, setCart } = useCart();

  const [showQrCode, setShowQrCode] = useState(false);

  const [validity, setValidity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [totalPrice, setTotalPrice] = useState("")

  const [isNotFinished, setIsNotFinished] = useState(true);
  const [finish, isFinish] = useState(false);

  const navigate = useNavigate();

  function handleBack() {
    if(!finish) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  function handleClickReturn() {
    setIsNotFinished(true);
    navigate("/");
}

  function handleShowQrCode(boolean) {
    setShowQrCode(boolean);
  }

  function  handleCompletePayment () {
    if(cart.length <= 0) {
        return alert("Não há itens no carrinho.")
    }
    if(!cardNumber || !cvcCode || !validity) {
        return toast.error("Preencha todos os campos (simulação)", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    handleNewOrder();
}

async function handleNewOrder () {
  try{
    setIsLoading(true);
    const response = await api.post("/orders", { user_id: user.id });
    const newOrder = response.data;

    if(newOrder) {
        await api.post("order_items", {
            order_id: newOrder.id,
            items: cart.map(item => ({
                amount: item.amount,
                dish_id: item.id,
                unit_price: item.unit_price,
                total_price: item.amount * item.unit_price
            }))
        });
        setIsLoading(false);
        setCart([]);
        setIsNotFinished(false);
        isFinish(true);
        return toast.success("Pedido confirmado! Acompanhe seu pedido em 'Histórico de pedidos'.", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    setIsLoading(false);
  } catch (error) {
      setIsLoading(false);
      console.log(error);
      setIsNotFinished(true);
      isFinish(false);
      return toast.error("Você não se encontra logado, faça o login novamente para então navegar.", {
          position: toast.POSITION.TOP_RIGHT
      });
  }
}
 
 
function handleRemoveItem(deletedItemId) {
  setCart((prevState) =>
    prevState.map((item) =>
      item.id === deletedItemId
        ? { ...item, amount: item.amount - 1 }
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
            <div className="page">

              <div className="wrapperBack">
                <ButtonText
                title="Voltar"
                icon={FiChevronLeft }
                onClick={handleBack} 
                />
              </div>

              {
                isDesktop &&

              <div className='columnLeft'>
                <div className="pageTitle">
                  <h1>Meu pedido</h1>
                </div>

                <Section>
              {cart && 
              <ul className="request">
                {
                  cart.map((item, index) => (
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
                  )) 
                }            
              </ul>                          
              }                          
            </Section> 

                <div className="total">
                  <h2>{`Total: R$ ${totalPrice}`}</h2>
                </div>               

              </div>
            }

              <div className="columnRight">
                <h1>Pagamento</h1>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="wrapperPaymentMethod"> 
                          <button type= "button" className="buttonPaymentMethod" onClick={() => handleShowQrCode(true)}>
                            <img
                              src={PixSvg}
                              alt="Símbolo do aplicativo 'pix'."
                            />
                            Pix
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="wrapperPaymentMethod">
                          <button type= "button" className="buttonPaymentMethod" onClick={() => handleShowQrCode(false)}>
                            <img
                              src={CardSvg}
                              alt="Imagem de um 'cartão de crédito/débito'."
                            />
                            Cartão
                          </button> 
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="TableContent" colSpan="2">
                      {showQrCode ? (
                            <img src={ImageQrCodePng} alt="Imagem de 'QRcode'." />
                          ) : (
                            <div className="cardPayment">
                            {
                              isNotFinished?
                              (
                                <form className="cardDetails">
                                <div className="divCardInputs">
                                  <label htmlFor="cardName">
                                  Nome no Cartão
                                  </label>
                                  <input
                                    type="text"
                                    id="cardName"
                                    placeholder="Marina V Andrade"
                                  />
                                </div>
                                
                                <div className="divCardInputs">
                                  <label htmlFor="cardNumber">
                                  Número do Cartão
                                  </label>
                                  <input
                                    type="number"
                                    id="cardNumber"
                                    placeholder="0000 0000 0000 0000"
                                    onChange={e => setCardNumber(e.target.value)}
                                    onKeyPress={e => {
                                        if (e.target.value.length >= 16) {
                                            e.preventDefault();
                                        }
                                      }}
                                  />
                                </div>
                                
                                <div className="expirationAndCvc">
                                  <div className="divExpirationAndCvc">
                                    <label htmlFor="validity">
                                    Validade
                                    </label>
                                    <input
                                      type="data"
                                      id="validity"
                                      placeholder="07/25"
                                      onChange={e => setValidity(e.target.value)}
                                      maxLength="5"
                                    />
                                  </div>
                                <div className="divExpirationAndCvc">
                                  <label htmlFor="cvcCode">
                                    CVC
                                  </label>
                                  <input
                                    type="number"
                                    id="cvcCode"
                                    placeholder="000"
                                    onChange={e => setCvcCode(e.target.value)}
                                    onKeyPress={e => {
                                        if (e.target.value.length >= 3) {
                                            e.preventDefault();
                                        }
                                        }}
                                  />
                                  </div>
                                </div>
                  
                                <div className="wrapperButtonCompletePayment">
                                  <Button
                                  type="button"
                                  className="buttonPayment"
                                  title="Finalizar pagamento"
                                  onClick={handleCompletePayment}
                                  >
                                  </Button>
                                </div>
                              </form>
                              ) : 
                              (
                                <div className="paymentFinalized">
                                    <AiOutlineCheckCircle/>
                                    <p>Pagamento aprovado!</p>
    
                                    <Button 
                                    onClick={handleClickReturn}
                                    title="Voltar"
                                    />
                                </div>
                            )
                            }
                            </div>
                          )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> 

            </div>
            </>
              )
            }
          </Content>
         </main>
        <Footer />
      </Container>    
  )
}