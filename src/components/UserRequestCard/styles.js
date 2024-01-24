import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    align-items: center;  
    justify-content: start;

    gap: 1rem;

   
> span {
        img {
            width: 5rem;
            height: 5rem;

            border-radius: 50%;

            @media (min-width: 500px) {
                width: 7rem;
                height: 7rem;
            }
        }
    }

> main {
    display: flex;
    flex-direction: column;

    align-items: left;
        
    > .requestDescription {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 2rem;

        padding: 0;       
        margin-bottom: 0rem;     

        @media (min-width: 500px) {
            gap: 2rem;
        }

        @media (min-width: 1024px) {
            gap: 2.6rem;
        }

        > h1 {            
            font-weight: 500;
            font-size: 1.5rem;

            letter-spacing: 0.5rem;

            color: ${({ theme }) => theme.COLORS.WHITE_300};

            @media (min-width: 500px) {
                font-size: 2rem;
         }
        }

        > h2 {
            font-weight: 500;
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.WHITE_300};

            @media (min-width: 500px) {
                font-size: 1.8rem;
            }
        }

        > span {
            font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
            font-weight: 400;
            font-size: 1rem;

            color: ${({ theme }) => theme.COLORS.GRAY_400};

            @media (min-width: 500px) {
                font-size: 1.3rem;
            }
        }
    }

    > footer {

        button {
        max-width: 15rem;
        
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        gap: 0.5rem;
       
        justify-content: left;

        font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
        font-weight: 400;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.RED_300};

        > svg {
            width: 2rem;
        }
    }

    }
}   
 `;