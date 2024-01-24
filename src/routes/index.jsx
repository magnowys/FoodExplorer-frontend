import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AppAdminRoutes} from './appAdmin.routes';
import { AppUserRoutes} from './appUser.routes';
import { AuthRoutes} from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      { user ? ( user.isAdmin ? <AppAdminRoutes /> : <AppUserRoutes /> ) : ( <AuthRoutes /> )} 
    </BrowserRouter>
  );
}