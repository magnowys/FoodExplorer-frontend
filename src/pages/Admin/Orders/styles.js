import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height: 100vh;
 
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
  "header"
  "content"
  "footer";

    .loader {
        grid-area: content;
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
        animation: lowOpacity 0.4s linear;
    }

    @keyframes lowOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const Content = styled.main`
    width: 100%;
  
    grid-area: content;
    display: flex;
    flex-direction: column;
  
    text-align: start;
    padding: 2rem 6rem;
  
    animation: increaseSize 0.7s ease;
  
    @keyframes increaseSize {
            0% {
                opacity: 0;
                scale: 0;
            }

            100% {
                opacity: 1;
                scale: 1;
            }
  }

    @media(min-width: 820px) {
        margin: 0 auto;
    }

    > button:first-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.7rem;
  
    }

    > section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        max-width: 136.6rem;
        margin: 0 auto;
        width: 100%;
     
        font-size: 3.2rem;
        font-weight: 500;
        margin-top: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE_300};
        
        @media(max-width: 820px) {
            font-size: 2.4rem;
        }
        
        > form {
            display: grid;

            width: 100%;
            margin-top: 2rem;
            max-height: 47rem;
            
            overflow-x: hidden;
            overflow-y: auto;

            scrollbar-color: transparent transparent; 

            &::-webkit-scrollbar {
                background: transparent;
            }
    
            nav {
                display: flex;
                justify-content: space-between;
                width: 100%;              

                span {
                    width: 100%;
                    display: inline;
                    font-size: 1.5rem;
                    font-weight: bold;
                    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
                    padding: 2.5rem;
                    color: ${({ theme }) => theme.COLORS.WHITE_300};
                    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000}; 
                   
                }

                > span:nth-child(1) {
                    border-top-left-radius: 1rem;
                    min-width: 15rem;                              
                }

                > span:nth-child(3) {
                    min-width: 40rem;
                }

                > span:nth-child(4) {
                    border-top-right-radius: 1rem;
                }
            }

            ul {

                li {
                    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
                    border-top: none;
                    width: 100%;
                    padding: 2.5rem;

                    @media (max-width: 820px) {
                        border: none;
                    }
                }
            }
        }

    }


    > button:last-child {
        display: flex;
        gap: 2.5rem;
        align-items: center;
        justify-content: center;

        margin-top: 5rem;
        margin: 4rem auto 3rem;

        width: clamp(15rem, 25rem, 27rem);
        height: 5rem;

        svg {
            font-size: 1.8rem;
        }
    }
`