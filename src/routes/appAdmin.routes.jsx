import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Admin/Home';
import { NewDish } from '../pages/Admin/NewDish';
import { DishEdit} from '../pages/Admin/DishEdit';
import { DishDetails } from '../pages/Admin/DishDetails';
import { Menu } from '../pages/Admin/Menu';
import { Orders } from '../pages/Admin/Orders';



export function AppAdminRoutes() {
  return (
    <Routes>

      <Route path="/" element={ <Home />} />
      <Route path="/new" element={ <NewDish />} />
      <Route path="/edit/:id" element={ <DishEdit />} />
      <Route path="/details/:id" element={ <DishDetails />} />
      <Route path="/menu" element={ <Menu />} />
      <Route path="/orders" element={ <Orders />} />
    
    </Routes>
  )
}