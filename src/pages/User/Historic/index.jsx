import { Container, Content } from "./styles";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";


import { useMediaQuery } from 'react-responsive';

import { FiArrowLeft } from 'react-icons/fi';
import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';
import { ButtonText } from "../../../components/ButtonText";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HistoricRequest } from "../../../components/HistoricRequest";
import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";

export function Historic() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

    const { user, isLoading, setIsLoading } = useAuth();
    const [itemsOrder, setItemsOrder] = useState([]);
   

    const navigate = useNavigate();

    function handleClickBack () {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchRequests () {
            setIsLoading(true);
            const response = await api.get(`/orders/${user.id}`);
            setItemsOrder(response.data.map(item => ({ ...item, status: item.status })));
            setIsLoading(false);
        }

        fetchRequests();
    }, []);

    return (
        <Container>
           {isMobile ? <UserMobileHeader /> : <UserDesktopHeader onChange={e => setSearch(e.target.value)} />}
            
            <Content>
                
            {
                !isLoading &&
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />
            }


            <Section title="Histórico de Pedidos">
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
                        <HistoricRequest
                            key={index}
                            data={{
                                status: item.status,
                                code: String(item.id).padStart(5, '0'),
                                created_at: item.created_at
                            }}
                            value={item.status}
                            details={item.items.map((i, index) => `${i.amount} x ${i.dish_title}${index > item.items.length -2 ? '': ', '}  `)}
                        />
                ))
            }
            </form>
            }

            </>
            )
        }
            </Section>
            </Content>
            <Footer/>
        </Container>
    )
}