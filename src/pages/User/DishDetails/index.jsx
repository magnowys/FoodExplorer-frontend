
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useCart } from '../../../hooks/cart'

import { useMediaQuery } from 'react-responsive';

import { Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi';

import ReceiptSvg from '../../../assets/receipt.svg';
import LessSvg from '../../../assets/less.svg';
import MoreSvg from '../../../assets/more.svg';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Ingredient } from '../../../components/Ingredient';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';


export function DishDetails() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const  { cart, setCart } = useCart();

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [ amount, setAmount ] = useState(1);

  const navigate = useNavigate();
  const params = useParams(); 

  function handleBack () {
    navigate(-1)
};

  function handleDecrement() {
    if(amount === 1) {
      return alert("O número mínimo de itens por pedido é um.")

    } else {
      setAmount(prevState => prevState - 1);
    }
  };

  function handleIncrement() {
      setAmount(prevState => prevState + 1);
  };


  function handleIncludeNewItem() {
    const unit_price = data.price

     const newItem = {
      id: data.id,
      title: data.title,
      photo: image,
      amount,
      unit_price,
      total_price: amount * unit_price,
     }

     setCart(prevState => [...prevState, newItem])
     setAmount(1)
    }


  useEffect(() => {
    async function fetchDishes() {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
    }
    fetchDishes();
}, [])


useEffect(() => {
    function fetchImage() {
        if(data) {
            setImage(`${api.defaults.baseURL}/files/${data.photo}`);
        }
    }
    fetchImage();
}, [data]);

  
  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader />}
      
      <main>

        <Content>
        <div className="box">
        {
            data &&

            <div className="versionDesktopColumnOne">
              <div className="wrapperBack">
                  <ButtonText
                    title="Voltar"
                    icon={FiChevronLeft }
                    onClick={handleBack} 
                  />
                </div>

                <img
                className="photoDish"
                src={image}
                alt="Foto do prato escolhido." 
                />
          </div>
          }

          {
            data &&

            <div className="versionDesktopColumnTwo">
              <div className="details">
                <h2>{data.title}</h2>

                <TextArea
                value={data.description}
                readOnly={true}
                />

                <div className="wrapperTags">
                 { 
                  data.ingredients.map(ingredient => (
                    <Ingredient
                    key={String(ingredient.id)}
                    title={ingredient.name}
                    />
                  ))
                 }
                </div> 
              </div>

              <div className="order">
                <div className="counter">
                  <button onClick={() => handleDecrement()}>
                    <img
                      src={ LessSvg }
                      alt="Imagem 'símbolo de subtração."
                    />
                  </button>
                  <input readOnly value={amount.toString().padStart(2, '0')} />
                  <button onClick={() => handleIncrement()}>
                    <img
                      src={ MoreSvg }
                      alt="Imagem 'símbolo de adição."
                      />
                  </button>
                </div>

                <div className="wrapperButton">
                  <img className="receipt"
                    src={ ReceiptSvg }
                    alt="Imagem de 'recibo/recebido/pedido'."
                  />
                  <Button
                  title={`Pedir - R$${data.price}`}
                  onClick={handleIncludeNewItem}
                  />
                </div>
              </div>

            </div>
          }               
        </div>
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}