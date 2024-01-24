import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { useMediaQuery } from 'react-responsive';

import { FiArrowLeft } from 'react-icons/fi';
import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { Container, Content } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer';
import { StatusOrders } from "../../../components/StatusOrders";

import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";


export function Orders() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const { isLoading, setIsLoading } = useAuth();

  const navigate = useNavigate();

  const [itemsOrder, setItemsOrder] = useState([]);


  function handleBack() {
    navigate(-1); 
  }

  async function handleUpdateStatus(itemIds) {
    setIsLoading(true);
    await Promise.all(itemIds.map(itemId => {
        const item = itemsOrder.find(item => item.id === itemId);
        api.patch(`orders/${itemId}`, {status: item.status} );
    setIsLoading(false);
    }));

    toast.success("Status atualizado com sucesso.", {
        position: toast.POSITION.TOP_CENTER
    });
  }

  useEffect(() => {
    async function fetchOrders () {
        setIsLoading(true);
        const response = await api.get(`/orders`);
        setItemsOrder(response.data.map(item => ({ ...item, status: item.status })));
        setIsLoading(false);
    }

    fetchOrders();
  }, []);


  return (

    <Container>

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader onChange={e => setSearch(e.target.value)} />}

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
    
        <Content>

          <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleBack}
          />
        
          <Section title="Pedidos">
            {
                itemsOrder &&
            <form>

              {
                  isDesktop &&
              <nav>
                <span>
                    Status
                </span>

                <span>
                    Código
                </span>

                <span>
                    Detalhamento
                </span>

                <span>
                    Data e hora
                </span>
              </nav>
              }

              {
                itemsOrder.map((item, index) => (
                  <StatusOrders
                      key={index}
                      data={{
                          status: item.status,
                          code: String(item.id).padStart(5, '0'),
                          created_at: item.created_at
                      }}
                      value={item.status}
                      details={item.items.map((i, index) => `${i.amount} x ${i.dish_title}${index > item.items.length -2 ? '': ', '}  `)}
                      onChange={e => {
                          const newStatus = e.target.value;
                        setItemsOrder(prevItems => prevItems.map(prevItem => {
                            if (prevItem.id === item.id) {
                                return { ...prevItem, status: newStatus }
                            } else {
                                return prevItem;
                            }
                        }))
                      }}  
                  />
                ))
              }
            </form>
            }
          </Section>
            
          <Button 
          title="Atualizar pedidos"
          onClick={() => handleUpdateStatus(itemsOrder.map(item => item.id))}
          />

        </Content>
        )
      }
 
      <Footer />

    </Container>    
  )
}