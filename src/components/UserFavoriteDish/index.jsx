import { Container } from "./styles";

export function UserFavoriteDish ({ data, loading, ...rest }) {

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
                    <h2>
                    {data.title}
                    </h2>                  

                 
                
                </main>               
        </Container>
    )
}