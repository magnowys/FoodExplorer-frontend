import { useRef, useState, useEffect } from 'react';
import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import CloseSvg from '../../../assets/close.svg';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Arrow } from './styles';
import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';
import { UserDishCard } from '../../../components/UserDishCard'; 


export function Menu() {
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])
  const scrollMealList = useRef(null);

  const [favorites, setFavorites] = useState([]);

  const { user } = useAuth();
  
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

  useEffect(() => {
    if (search.length > 0) {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  } else {
    setDishes(false)
  }
  }, [search]);

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

  const { signOut } = useAuth(); 
    const navigate = useNavigate();
  
    function handleSignOut() { 
      navigate("/"); 
      signOut(); 
    }

    function handleCloseMenu() { 
      navigate("/"); 
    }

    function handleShowFavorites() { 
      navigate("/favorites"); 
    }

    function handleButtonHistoric() { 
      navigate(`/historic/${user.id}`); 
    }

    function handleCloseSearch() { 
      setDishes(false); 
    }

   return (
      <Container>
        <div className="closeMenu">
          <button className="buttonCloseMenu"
          type="button"
          onClick={handleCloseMenu}>
            <img
              src={ CloseSvg }
              alt="imagem de um 'X'."
            />
          </button>

          <span>
            Menu
          </span>   
        </div>

        <div className="page">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
              /> 
              
              { dishes &&
            <>
            <div className="closeSearch">
              <button className="buttonCloseSearch"
              type="button"
              onClick={handleCloseSearch}>
                <img
                  src={ CloseSvg }
                  alt="imagem de um 'X'."
                />
              </button>
            </div> 
            </>
            }
          
          <div className="carousel">
            <section>
              <div ref={scrollMealList}>
                  { dishes && (
                    <div className="cards">
                      {dishes.map(dish => (
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
                      ))}
                  </div>
                )} 
              </div>
            </section>
            
          { dishes && (
            <>
              <Arrow direction="prev" onClick={handlePrevMealList}>
                <FiChevronLeft />
              </Arrow>

              <Arrow direction="next" onClick={handleNextMealList}>
                <FiChevronRight />
              </Arrow>
            </>
          )}        
         </div>

         <button className="buttonRequests"
          type="button"
          onClick={handleButtonHistoric}
          >
            Histórico de Pedidos
          </button>

          <button className="buttonFavorites"
          type="button"
          onClick={handleShowFavorites}
          >
            Favoritos
          </button>

         <button className="buttonSignOut"
          type="button"
          onClick={handleSignOut}>
            Sair
          </button>
        </div>

        <Footer />
      </Container>
   )
}
