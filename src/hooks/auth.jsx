import { createContext, useContext, useState, useEffect } from 'react'; 

import { api } from '../services/api'; 

import { toast } from "react-toastify";


const AuthContext = createContext({});


function AuthProvider({ children }) {
  const [data, setData] = useState({}); 

  const [dataDishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }) {

    try {
      setIsLoading(true);
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      setIsLoading(false);

      localStorage.setItem("@rocketfood:user", JSON.stringify(user));
      localStorage.setItem("@rocketfood:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token }); 


      toast.success(`Bem vindo(a), ${user.name}!` , {
        position: toast.POSITION.TOP_CENTER
      });


    } catch (error)  {
      setIsLoading(false);
      if (error.response){
        toast.error(`${error.response.data.message}` , {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        toast.error("Não foi possível entrar.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
  }

  function signOut() { 
    localStorage.removeItem("@rocketfood:token"); 
    localStorage.removeItem("@rocketfood:user"); 

    setData({}); 
  }

 
  useEffect(() => { 
    const token = localStorage.getItem("@rocketfood:token"); 
    const user = localStorage.getItem("@rocketfood:user"); 

    if(token && user) { 
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({ 
        token,
        user: JSON.parse(user) 

      });
    }
  }, []);

  async function fetchDishes () {
    setIsLoading(true);
    const responseDish = await api.get("/dishes");
    setIsLoading(false);
    setDishes(responseDish.data);
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      fetchDishes,
      user: data.user,
      dataDishes,
      isLoading,
      setIsLoading
      }}
      > 
      {children} 
    </AuthContext.Provider>
  )
}


function useAuth() {
  const context = useContext(AuthContext); 
  return context;
}

export { AuthProvider, useAuth }; 
