import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';

import { useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import { Container, Content, Arrow } from './styles';
import { Section } from '../../../components/Section';
import { UserDishCard } from '../../../components/UserDishCard'; 
import { Footer } from '../../../components/Footer'; 

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MobileBannerPng from '../../../assets/mobileBanner.png';
import DesktopBannerPng from '../../../assets/desktopBanner.png';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";


export function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const imageUrl = isMobile ? MobileBannerPng : DesktopBannerPng;

  const navigate = useNavigate();
  const { user, isLoading, setIsLoading } = useAuth();

  const scrollMealList = useRef(null);
  const scrollDrinkList = useRef(null);
  const scrollDessertList = useRef(null);

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]); 
  const [favorites, setFavorites] = useState([]);

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

  async function handleAddFavorites (dishId) {
    try {
      const response = await api.get(`favorites/${user.id}`);
      const dishesFavorites = response.data;
      const isFavorite = dishesFavorites.filter(item => item.id === dishId).length;

      if(isFavorite) {
        await api.delete(`favorites/${dishId}`);
        setFavorites(favorites.filter(dish => dish !== dishId));
        toast.success("Este prato já não faz parte da sua lista de favoritos.", {
          position: toast.POSITION.TOP_RIGHT
        });

      } else {
        await api.post("favorites", {
          dish_id : dishId,
          user_id: user.id
        });

        setFavorites([...favorites, dishId]);
        toast.success("Pronto! Este prato já está salvo em seus favoritos.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

  } catch (error) {
    console.error(error)
    toast.error("Internal server error", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  }

  useEffect(() => {
    setIsLoading(true);
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`);
      setDishes(response.data);
      setIsLoading(false);
    }
    fetchDishes();
  }, [search]);

  useEffect(() => {
    async function fetchFavorites () {
      setIsLoading(true);
      const response = await api.get(`favorites/${user.id}`);
      const listFavorites = response.data.map(item => item.id);
      setFavorites(listFavorites);
      setIsLoading(false);
    }

    fetchFavorites();
  }, []);


  return (

      <Container>

        {isMobile ? <UserMobileHeader /> : <UserDesktopHeader onChange={e => setSearch(e.target.value)} />}

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
                      <UserDishCard 
                      key={String(dish.id)}
                      data={dish}
                      title={dish.title}
                      value={dish.description}
                      price={`R$ ${dish.price}`}
                      type="text"
                      visibility="not-visible"
                      image={dish.photo}
                      onClick={() => handleAddFavorites(dish.id)}
                      isFavorite={favorites.includes(dish.id)}
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
                      <UserDishCard 
                      key={String(dish.id)}
                      data={dish}
                      title={dish.title}
                      value={dish.description}
                      price={`R$ ${dish.price}`}
                      type="text"
                      visibility="not-visible"
                      image={dish.photo}
                      onClick={() => handleAddFavorites(dish.id)}
                      isFavorite={favorites.includes(dish.id)}
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
                      <UserDishCard 
                      key={String(dish.id)}
                      data={dish}              
                      title={dish.title}
                      value={dish.description}
                      price={`R$ ${dish.price}`}
                      type="text"
                      visibility="not-visible"
                      image={dish.photo}
                      onClick={() => handleAddFavorites(dish.id)}
                      isFavorite={favorites.includes(dish.id)}
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