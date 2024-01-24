import { useRef, useState, useEffect } from 'react';
import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CloseSvg from '../../../assets/close.svg';


import { Container, Arrow } from './styles';
import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';
import { AdminDishCard } from '../../../components/AdminDishCard'; 


export function Menu() {
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])

  const scrollMealList = useRef(null);
  
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


  const { signOut } = useAuth(); 
  const navigate = useNavigate();

  function handleSignOut() { 
    navigate("/"); 
    signOut(); 
  }

  function handleNewDish() {
    navigate("/new"); 
  }

  function handleAllOrdersButton() { 
    navigate("/orders"); 
  }

  function handleCloseMenu() { 
    navigate("/"); 
  }
  
  function handleCloseSearch() { 
    setDishes(false); 
  }

  function handleDetails(id) {
    navigate(`/details/${id}`); 
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
            icon={ FiSearch }
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

          <button className="buttonNewDish"
          type="button"
          onClick={handleNewDish}
          >
            Novo prato
          </button>

          <button className="buttonOrders"
          type="button"
          onClick={handleAllOrdersButton}
          >
            Pedidos
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
