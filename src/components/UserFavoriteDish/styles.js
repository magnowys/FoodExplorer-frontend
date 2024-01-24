import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center; 
    gap: 1rem;   

    > span {
        img {
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
        }
    }

    > main {
        display: flex;
        flex-direction: column;

        padding: 0 3rem;
        width: 100%; 
        align-items: center;
        
        overflow: auto;
        gap: 0;

       > h2 {
            font-weight: 500;
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.WHITE_300};
        }

        > footer {
            width: 100%;
            height: 10px;
          
            > button {
                width: 100%;

                display: flex;
                flex-direction: row-reverse;
                
                gap: 0.5rem; 

                align-items: center;        

                margin-top: -2rem;
                
                
                font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
                font-weight: 400;
                font-size: 1.3rem;
                color: ${({ theme }) => theme.COLORS.RED_300};

                svg {
                    font-size: 1.6rem;
                    }
        }
    }   
}
`;