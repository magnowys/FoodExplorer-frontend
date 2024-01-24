import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.main`
    display: grid;
    grid-template-rows: 1fr 10fr 1fr;
    grid-template-areas:
    "header"
    "section"
    "footer";
    
    overflow-x: hidden;

    width: 100%;
    height: 100vh;

    > section {
        grid-area: section;

        margin: 2rem 2rem;

        font-weight: 500;
        font-size: 3.2rem;

        overflow-x: hidden;
        overflow-y: auto;

        scrollbar-color: transparent transparent; 

        &::-webkit-scrollbar {
            background: transparent;
        }

        animation: leftRight 0.4s linear;

        .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5rem auto;

            animation: lowOpacity 0.4s linear;
        }

        color: ${({ theme }) => theme.COLORS.WHITE_300};

        > .emptyList {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            justify-content: center;
            
            > div:nth-child(1) {
                display: flex;
                align-items: center;
                gap: 0.8rem;

                > p {
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 100%; 
                    white-space: nowrap;

                    @media (min-width: 500px) {
                        font-size: 2rem;
                    }
                }

                > svg {
                    color: ${({ theme }) => theme.COLORS.BLUE_100};
                }
            }

            > div:nth-child(2) {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.8rem;

                padding: 2rem;

                max-width: 70%;
               

                border: solid 1px ${({ theme }) => theme.COLORS.BLUE_100};

                > p {
                    font-weight: 300;
                    font-size: 1.4rem;
                    line-height: 140%;                   

                    @media (min-width: 500px) {
                        font-size: 1.6rem;
                    }
                }

                > svg {
                    width: 10rem;
                    height: 20rem;

                    color: ${({ theme }) => theme.COLORS.BLUE_100};

                    @media (min-width: 500px) {
                        width: 20rem;
                        height: 30rem;
                    }
                }
            }
        }

        > ul {
            max-height: 60vh;
            margin-top: 1rem;

            padding-right: 1rem;
            margin-bottom: 1rem;

            overflow: auto;
            overflow-x: hidden;
            overflow-y: auto;

            scrollbar-color: transparent transparent; 

            &::-webkit-scrollbar {
                background: transparent;
            }
              
            animation: lowOpacity 0.4s linear;

        > li {
            > div {
                margin: 2rem;
            }
        }

    }

    > footer {
        
        button {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            
            max-width: 40%;
            gap: 0.5rem;
            font-size: 1.6rem;

            margin-top: 2rem;
        }
    }
 }

    > header {
        grid-area: header;
        width: 100%;
    }

    > footer {
        grid-area: footer;
        width: 100%;
    }

    @media (max-width: 820px) {
        > section {
            padding: 1rem 4rem;
            ul li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                padding-right: 2rem;
                
            }
        }
    }

    @media (max-height: 830px) {
        > section {
            ul li {
                padding-top: 25rem;
                max-height: 35rem;
            }
        }
    }

    @media (max-height: 700px) and (max-width: 820px) {
        > section {
            > ul li {
                padding-top: 28rem;
                max-height: 30rem;
            }
        }
    }

    @media (min-width: 820px) {

        > section {
            margin: 0 auto;
            padding: 1rem 4rem;

            > ul li {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                max-width: 136.6rem;
                gap: 1rem;
                color: red;

                flex-wrap: wrap;
            }
        }
    }

    @media (min-width: 1100px) {
        > section {     
            > ul li {
                padding-top: 1rem;
                max-height: 50rem;
            }
        }
}

    @keyframes leftRight {
        0% {
            transform: translateX(-180px);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-weight: bold; 
`;
