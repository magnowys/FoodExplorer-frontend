import { Container, Content, Arrow } from './styles';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../../services/api';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MobileBannerPng from '../../../assets/mobileBanner.png';
import DesktopBannerPng from '../../../assets/desktopBanner.png';

import { useMediaQuery } from 'react-responsive';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { Section } from '../../../components/Section';
import { AdminDishCard } from '../../../components/AdminDishCard'; 
import { Footer } from '../../../components/Footer'; 

import { useAuth } from '../../../hooks/auth';
import { Rings } from "react-loader-spinner";


export function Home() {
  const scrollMealList = useRef(null);
  const scrollDrinkList = useRef(null);
  const scrollDessertList = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const imageUrl = isMobile ? MobileBannerPng : DesktopBannerPng;

  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useAuth();

  const [dishes, setDishes] = useState([]); 
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search.toUpperCase()}&ingredients=${search.toUpperCase()}`);
      setDishes(response.data);
       setIsLoading(false);
    }
    fetchDishes();
  }, [search]);

  const handlePrevMealList = () => {
    scrollMealList.current.scrollBy({
    left: -120,
    behavior: 'smooth'
  });
  }

  const handleNextMealList = () => {
      scrollMealList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  const handlePrevDrinkList = () => {
      scrollDrinkList.current.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
  }

  const handleNextDrinkList = () => {
      scrollDrinkList.current.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
  }

  const handlePrevDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: -120,
      behavior: 'smooth'
    });
  }

  const handleNextDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  function handleDetails(id) {
    navigate(`/details/${id}`); 
  }


  return (
    <Container>

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader onChange={e => setSearch(e.target.value)} />}

      <main>

        <Content>
          <div className="Banner">
            <img
                src={imageUrl}
                alt="Imagem de 'polígono azul'."
              />
            <div className="wrapperBanner">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>

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
              <Section title="Refeições">  
                <div ref={scrollMealList}>
                {
                    dishes.filter(dish => dish.category === "Refeições").map(dish => (
                      <AdminDishCard 
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                      title={dish.title}
                      value={dish.description}
                      price={`R$ ${dish.price}`}
                      type="text"
                      visibility="not-visible"
                      image={dish.photo}
                      />
                    )
                  )
                } 
                </div>

                <Arrow
                  direction="prev"
                  onClick={handlePrevMealList}
                >
                  <FiChevronLeft />
                </Arrow>

                <Arrow
                  direction="next"
                  onClick={handleNextMealList}
                >
                  <FiChevronRight />
                </Arrow>
              </Section>

              <Section title="Sobremesas">
                <div ref={scrollDessertList}>
                {
                    dishes.filter(dish => dish.category === "Sobremesas").map(dish => (
                      <AdminDishCard 
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                      title={dish.title}
                      value={dish.description}
                      price={`R$ ${dish.price}`}
                      type="text"
                      visibility="not-visible"
                      image={dish.photo}
                      />
                    )
                  )
                } 
                </div>

                <Arrow
                  direction="prev"
                  onClick={handlePrevDessertList}
                >
                  <FiChevronLeft />
                </Arrow>

                <Arrow
                  direction="next"
                  onClick={handleNextDessertList}
                >
                  <FiChevronRight />
                </Arrow>
              </Section>

              <Section title="Bebidas">
                <div ref={scrollDrinkList}>
                {
                    dishes.filter(dish => dish.category === "Bebidas").map(dish => (
                      <AdminDishCard 
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                      title={dish.title}
                      value={dish.description}
                      price={`R$ ${dish.price}`}
                      type="text"
                      visibility="not-visible"
                      image={dish.photo}
                      />
                    )
                  )
                } 
                </div>

                <Arrow
                  direction="prev"
                  onClick={handlePrevDrinkList}
                >
                  <FiChevronLeft />
                </Arrow>

                <Arrow
                direction="next"
                onClick={handleNextDrinkList}
                >
                  <FiChevronRight />
                </Arrow>
              </Section>
          </>
          )
        }

        </Content>
        
      </main>

      <Footer />

    </Container>
  )
}