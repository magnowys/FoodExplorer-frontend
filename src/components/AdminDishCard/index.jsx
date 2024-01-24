import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container, Content } from './styles';

import EditSvg from '../../assets/edit.svg';

import { FiChevronRight } from 'react-icons/fi';

import { TextArea } from '../TextArea';


export function AdminDishCard({ title, onClick, value, price, data, visibility, image, ...rest }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;

  const [imageDish, setImageDish] = useState(null);

  const navigate = useNavigate();

  function handleButtonDishEdit(id) {
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
    async function fetchImageDish () {
        if(image) {
            setImageDish(`${api.defaults.baseURL}/files/${image}`);
        }
    }
    fetchImageDish();
}, [image])
  
  return (
    <Container>
      <main>
        <Content>
            <img
              className="dish"
              src={imageDish}
              alt="Imagem do prato."
            />

            <button type="button" className="titleDishButton" onClick={onClick}>
              <h2 className="titleDish">
                {title}
                <FiChevronRight />
              </h2>
            </button>
 
            <p className="price">{price}</p>
          
        </Content>

        <button type='button' className="pencil" onClick={() => handleButtonDishEdit(data.id)}>
        <img
          src={ EditSvg }
          alt="Imagem de um 'lápis''."
        />

        </button>
      
      </main>
    </Container>
  )

}