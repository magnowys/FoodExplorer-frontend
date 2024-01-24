import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container, Content } from './styles';

import { FiChevronLeft } from 'react-icons/fi';


import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Ingredient } from '../../../components/Ingredient';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';


export function DishDetails() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const params = useParams(); 
  
  function handleBack() {
    navigate(-1); 
  }

  function handleClickEdit() {
    navigate(`/edit/${params.id}`);
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

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}

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

              <div className="buttonEdit">
                <Button
                title="Editar prato"
                onClick={handleClickEdit}
                />
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