import{ useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';

import { HeaderSign } from '../../components/HeaderSign' 
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Rings } from "react-loader-spinner";

export function SignIn() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  
  const { signIn, isLoading } = useAuth();

  const navigate = useNavigate();

  function handleRegister() {
    navigate("/register");
  }

  function handleSignIn() {
    signIn({ email, password });
  }

   return (
      <Container>
     
          <div className="columnTitle">
            <HeaderSign />
          </div>

          <div className="columnLogin">
            <Form>   
              <div className="wrap">
                <div id="loginIn">
                  <h2>Faça login</h2>
                </div>

              <div className="Data">
                <span>Email</span>
                  <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                  /> 
              </div>

               <div className="Data">
                <span>Senha</span>
                  <Input
                      placeholder="No mínimo 6 caracteres"
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                  />
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
                <Button title="Entrar"  onClick={handleSignIn} /> 
               
                <button type="button" className="buttonSignUp" onClick={handleRegister}>
                  Criar uma conta
                </button>
                </>
                )
            }
              </div>
            </Form>
          </div> 
      </Container>
   )
}
