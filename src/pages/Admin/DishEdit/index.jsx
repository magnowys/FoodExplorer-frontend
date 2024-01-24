import { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";

import { toast } from "react-toastify";

import { useMediaQuery } from 'react-responsive';
import { FiChevronLeft, FiShare } from 'react-icons/fi';

import { Container, Content, DishImgInput } from './styles';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Ingredient } from '../../../components/Ingredient';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { DishItem } from '../../../components/DishItem';


export function DishEdit() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const { isLoading, setIsLoading } = useAuth();

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [ ingredients, setIngredients ] = useState([]); 
  const [ newIngredient, setNewIngredient ] = useState(""); 

  const [isString, setIsString] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  
  function handleBack() { 
    navigate(-1); 
  }

  function handleAddIngredient() {
    if(!newIngredient) {
      return toast.error("Não é possível adicionar campo vazio.", {
        position: toast.POSITION.TOP_RIGHT
      })
    }

    const newIngredientObject = { id: null, name: newIngredient, dish_id: data.id }
    setIngredients(prevState => [...prevState, newIngredientObject]);

    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }


  async function handleDeleteDish () {
    const confirm = window.confirm("Tem certeza que deseja excluir o prato ?");

    if(confirm) {
      setIsLoading(true);
      await api.delete(`/dishes/${params.id}`);
      setIsLoading(false);
      navigate("/");
    }
  }

  async function handleSaveDish () {
    const formData = new FormData();

    if(!image) {
      return toast.error("Adicione uma nova imagem para o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if(!title || !price || !description || !ingredients ){
      return toast.error("Preencha todos os campos para criar o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    
    if(newIngredient) {
      return toast.error("Você deixou o campo de ingrediente incompleto, finalize ou apague o conteúdo para adicionar o ingrediente.", {
        position: toast.POSITION.TOP_CENTER
      });
    }

    const ingredientNames = ingredients.map(item => item.name);

    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("ingredients", ingredientNames);
    formData.append("description", description);
    formData.append("photo", image);
    formData.append("isString", isString);


    try{
      setIsLoading(true);
      await api.put(`/dishes/${params.id}`, formData);
      setIsLoading(false);
      toast.success("Prato atualizado com sucesso.", {
        position: toast.POSITION.TOP_CENTER
      });
      navigate("/");

    } catch (error){
      setIsLoading(false);
      toast.error("Não foi possível atualizar o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  useEffect(() => {
    async function fetchDishes () {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
        setImage(response.data.photo);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setCategory(response.data.category);
        setIngredients(response.data.ingredients)
      } catch (err) {
        return console.error({ message: err.message })
      }
    }

    fetchDishes();
  }, [params.id]);

  useEffect(() => {
    if (typeof(image) === 'string') {
      setIsString(true)
    }
    else{
      setIsString(false)
    }
  }, [image])

  return (
    <Container>

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}

      <main>

        <Content>
        {
        data &&
          <form>
            
              <div className="wrapperBack">
                  <ButtonText
                    title="Voltar"
                    icon={ FiChevronLeft }
                    onClick={handleBack} 
                  />
              </div>

              <div className="wrapperTitle">
                <h2>Editar Prato</h2>
              </div>
              
              <div className="rowVersionDesktopOne">
                <div className="selectImg">
                  <p>Imagem do prato</p>
                  <DishImgInput>
                    <label htmlFor="dishImg">
                      <div className="share">
                        <FiShare className="share-icon" />
                        <span>Selecione Imagem</span>
                      </div>
      
                      <input
                        id="dishImg"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                      />
                    </label>
                  </DishImgInput>
                </div>
               
                <div className="wrapperName">
                  <label htmlFor="dishInput">Nome:</label>    
                  <Input
                  id="dishInput"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  /> 
                </div>

                <div className="wrapperCategory">
                  <label htmlFor="categorySelect">Categoria:</label>
                  <select id="categorySelect"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  >
                  <option value="">{category}</option>
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                  </select>
                </div>

              </div>
             
              <div className="rowVersionDesktopTwo">
                <div className="wrapperIngredients">
                  <label htmlFor="ingredients">Ingredientes</label>
                  {
                    data.ingredients &&
                    <div className="wrapperTags" id="ingredients">
                  {
                    ingredients.map((ingredient, index) => (
                      <DishItem
                        isNew={false}
                        key={String(index)}
                        value={ingredient.name}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />  
                    ))
                  }
            
                  <DishItem
                    isNew={true}
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  /> 
                  </div>
                  }
                  
                </div>

                <div className="wrapperPrice">
                  <label htmlFor="priceInput">Preço(R$):</label>    
                  <Input
                  id="priceInput"
                  type="text"
                  value={`${price}`}
                  onChange={e => setPrice(e.target.value)}
                  /> 
                </div>
              
              </div>

              <div className="wrapperDescription">
              <label htmlFor="textarea">Descrição</label>
                <textarea
                  type="text"
                  id="textarea" 
                  readOnly={false}
                  value={description}
                  onChange={e => setDescription(e.target.value)}>
                </textarea>
                
              </div>
             
              <div className="buttonSaveOrDelete">
                <Button className="buttonExclude"
                title="Excluir prato"
                onClick={handleDeleteDish}
                />
                <Button
                title="Salvar alterações"
                onClick={handleSaveDish}
                />
              </div>
        
          </form>
        }
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}