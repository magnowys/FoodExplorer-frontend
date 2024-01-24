import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/User/Home';
import { DishDetails } from '../pages/User/DishDetails';
import { Menu } from '../pages/User/Menu';
import { Request } from '../pages/User/Request';
import { Payment } from '../pages/User/Payment';
import { Favorites } from '../pages/User/Favorites';
import { Historic } from '../pages/User/Historic';


export function AppUserRoutes() {

  return (
    <Routes>

      <Route path="/" element={ <Home />} />
      <Route path="/details/:id" element={ <DishDetails />} />
      <Route path="/favorites" element={ <Favorites />} />
      <Route path="/menu" element={ <Menu />} /> 
      <Route path="/request" element={ <Request />} />
      <Route path="/payment" element={ <Payment />} />
      <Route path="/historic/:id" element={ <Historic />} />
      
    </Routes>
  )
}