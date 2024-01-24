import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
import { AiOutlineDelete } from "react-icons/ai";

export function UserRequestCard ({ data, onClick, loading, ...rest }) {
    return (
        <Container {...rest}>
                <span>
                {
                    data.imageDish &&
                    <img 
                    src={data.imageDish} 
                    alt="imagem da refeição" 
                    />
                }
                </span>

                <main>
                    <div className="requestDescription">
                        {
                            data.amount &&
                            <h1>
                                {`${data.amount}x `}
                            </h1>
                        }

                        
                            
                            <h2>
                            {data.title}
                            </h2>
    
                        
                       
                        {
                            data.price && 
                            <span>
                                {`R$: ${data.price}`}
                            </span>
                        }
                    </div>

                    <footer>
                        <ButtonText
                            icon={AiOutlineDelete}
                            title="Excluir"
                            onClick={onClick}
                            disabled={loading}
                        />
                    </footer>
                </main>
        </Container>
    )
}