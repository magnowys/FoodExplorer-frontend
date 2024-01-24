import { useState } from 'react'; 

import{ useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Container, Form } from './styles';

import { HeaderSign } from '../../components/HeaderSign' 
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleSignUp(){
    if(!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    if (password.length < 6) {
      return alert("Password precisa ter no mínimo 6 caracteres");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){ //se o erro tiver uma resposta do backend
        alert(error.response.data.message); //dá um alerta na mensagem dessa resposta desse erro, trazendo para o frontend a mensagem de AppError do backend
      } else { //se não houver nenhuma mensagem específica
        alert("Não foi possível cadastrar o usuário"); //dou uma mensagem mais genérica
      }
    });

  };

   return (
      <Container>
        <div className="columnTitle">
          <HeaderSign />
        </div>

        <div className="columnLogin">
          <Form>   
            <div className="wrap">
              <div id="makeYourAccount">
                <h2>Crie sua conta</h2>
              </div>
            
              <div className="Data">
                <span>Seu nome</span>
                <Input
                  placeholder="Exemplo: Juliana Frazão"
                  type="text"
                  onChange={e => setName(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
                />
              </div>
              
              <div className="Data">  
                <span>Email</span>
                  <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)} //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
                  />
              </div>
          
              <div className="Data">  
                  <span>Senha</span>
                    <Input
                      placeholder="No mínimo 6 caracteres"
                      type="password"
                      onChange={e => setPassword(e.target.value)} //onChange={e => setPassword(e.target.value)}
                  />
              </div>

              <Button title="Criar conta"  onClick={handleSignUp} /> 
            
              <button type="button" className="buttonBack" onClick={handleBack}>
                Já tenho uma conta
              </button>
            </div>
          </Form>
        </div> 
      </Container>
   )
}
