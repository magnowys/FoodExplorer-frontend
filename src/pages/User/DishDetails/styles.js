import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
  "header"
  "main"
  "footer";

  overflow-y: hidden;

  > main { 
    grid-area: main;
   
    margin: 0 auto;
   
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
    }

    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    width: 100%;
    padding-bottom: 0;
   
    align-items: center;
    justify-content: center;
     
  }

  > header {
    grid-area: header;
    width: 100%;
  }

  > footer {
    grid-area: footer;
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  height:100vh;

    > .box {
      display: flex;
      flex-direction: column;

      gap: 1.6rem;

      padding-bottom: 0;
      padding-top: 1rem;
      width: 30rem;

      align-items: center;
      justify-content: center;

      @media (min-width: 280px) {
        margin-top: 7rem;
      }

      @media (min-width: 320px) {
        margin-top: 1rem;
      }

      @media (min-width: 360px) {
        margin-top: 5rem;
      }

      @media (min-width: 390px) {
        margin-top: 2rem;
      }

      @media (min-width: 412px) {
        margin-top: 2rem;
      }

      @media (min-width: 500px) {
        align-items: start;
        justify-content: start;
        margin-top: 8rem;
      }

      @media (min-width: 820px) {
        display: flex;
        flex-direction: row;

        align-items: end;

        gap: 5.6rem;
      
        width: 100rem;
        height: 48rem;

        padding: 0 6rem 0 8rem;
        margin-top: -5rem;
      }

    

      @media (min-width: 1024px) {
        width: 90rem;
        margin-top: -50rem;
      }

      @media (min-width: 1024px) and (min-height: 600px) {
        width: 90rem;
        margin-top: -4rem;
      }
 
      @media (min-width: 1280px) and (max-height: 800px) {
        width: 110rem;
      }

      @media (min-width: 1400px) {
        width: 140rem; 
     
        padding: 0 20rem 0 22rem; 
        margin-top: 6rem;
  
        align-items: center;
      }


      > .versionDesktopColumnOne {
        display: flex;
        flex-direction: column;

        gap: 1.6rem;

        align-items: center;

        @media (min-width: 1024px) {
          gap: 6rem;
        }

        > .wrapperBack {
        width: 31.6rem;
      
        display: flex;
        justify-content: start;
        }

        > .photoDish {
          width: 26.4rem;
          height: 26.4rem;

          border-radius: 50%; 
          overflow: hidden; 
        }  
      }
      > .versionDesktopColumnTwo {
        display: flex;
        flex-direction: column;
      
        width: 31.6rem;
        height: 32.0rem;

        @media (min-width: 1024px) {
        width: 100%;
        height: 30.0rem;
      }

        > .details {
        display: flex;
        flex-direction: column;

        align-items: center; 
        
        gap: 1.5rem;
      
        @media (min-width: 1024px) {
        align-items: start;
        gap: 0.5rem;
      }

      @media (min-width: 1300px) {
        width: 100%;
        height: 40.0rem; 

        gap: 0rem;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 140%;

        color: ${({ theme}) => theme.COLORS.WHITE_300};
      
        @media (min-width: 1300px) {
          margin-bottom: 2rem;
      }
    }  

      > .wrapperTags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        padding-left: 1.5rem;
       
        margin-bottom: 4.8rem;

        @media (min-width: 1024px) {
          margin-bottom: 3rem;
          padding-left: 0rem;
      }

      }
    }
      
        > .order {
        display: flex;
      
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 4rem;
        
        @media (min-width: 820px) {
          justify-content: start; 
        
        } 

        > .counter {
          display: flex;

          button {
          border: none;
          background: transparent;

          > img {
            width: 2rem;
            height: 2rem;      
          }
        }

        > input {
          color: ${({ theme }) => theme.COLORS.WHITE_300};
          font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
          font-weight: 400;
          font-size: 1.6rem;

          width: 4rem;
          height: 2rem;

          display: flex;
          align-items: center;

          text-align: center;

          border: none;
          background: transparent;
        }     
      }

      > .wrapperButton {
            display: flex;
            justify-content: center;
            align-items: center; 

            gap: 0.8rem;
          
            padding: 1.2rem 2rem;
            
            font-size: 1.2rem;
            font-weight: 500;

            line-height: 2px;

            border-radius: 5px;

            background-color: ${({ theme }) => theme.COLORS.RED_100};
            color: ${({ theme }) => theme.COLORS.WHITE_100};
            display: flex;

            @media (min-width: 768px) {
              max-width: 22.8rem;
              height: 1.39rem;

              padding: 2rem 3rem;
            }

            > .receipt {
              max-width: 1.6rem;
              height: 1.6rem;

              @media (min-width: 370px) {
              font-size: 1.2rem;
              line-height: 2px;
            }
            
            @media (min-width: 425px) {
              max-width: 2rem;
              height: 2rem;
            }
            }

            > button {
            text-align: center;
            font-size: 10px;        
            font-weight: 500;

            line-height: 2.6px;
          
            white-space: wrap;

            @media (max-width: 306px) {
              line-height: 12px;
            }

            @media (min-width: 370px) {
              font-size: 1.2rem;
            }

            @media (min-width: 425px) {
              font-size: 1.6rem;
            }

          }
        }
    }    
  } 
}
`;

