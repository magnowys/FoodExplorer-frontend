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

    padding-top: 5.4rem;
    
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent;
    
    &::-webkit-scrollbar {
        background: transparent;
    }
    
    @media (min-width: 400px) {
      padding-top: 0rem;
    } 
    
    @media (min-width: 768px) {
      padding-top: 7rem;
    }

    @media (min-width: 1024px) {
      padding-top: 10rem;
      max-width: 102.4rem;
    }

    @media (min-width: 1300px) {
      padding-top: 14.5rem;
      max-width: 140.0rem;
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
`;

export const Content = styled.div`
  max-width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  align-items: center;
  justify-content: center;

  padding: 0rem 5.6rem;

  > form {
    display: flex;
    flex-direction: column;

    align-items: start;
    justify-content: start;

    background: transparent;

    gap: 2.4rem;
   
    width: 100%;

    @media (max-width: 280px) and (max-height: 653px) {
      margin-top: 14rem;
    }

    @media (max-width: 320px) {
      padding-top: 6rem;
    }

    @media (min-width: 360px) {
      padding-top: 14rem;
    }


    @media (min-width: 375px) and (min-height: 532px) {
      padding-top: 22rem;
      width: 290px;
    }

    @media (min-width: 375px) and (min-height: 834px) {
      padding-top: 6rem;
    }


    @media (min-width: 390px) and (min-height: 844px) {
      padding-top: 0rem;
      height: 90rem;
    }

    @media (min-width: 412px) and (min-height: 892px) {
      padding-top: 1rem;
      height: 85rem; 
    }

    @media (min-width: 425px) and (min-height: 834px) {
      padding-top: 18rem;
    }

    @media (min-width: 540px) and (min-height: 720px) {
      height: 65rem;
      width: 40rem;
      padding-top: 0rem;
    }

    @media (min-width: 768px) { 
      width: 52rem;
      margin-top: -25rem;
    }

    @media (min-width: 768px) and (min-height: 1024px) {
      height: 100rem;
      width: 72rem;
      padding: 0rem 8rem 0rem 8rem;  
      margin-top: -10rem;
    }


    @media (min-width: 820px) and (min-height: 1180px) {
      height: 100rem;
      width: 72rem;
      padding: 0rem 8rem 0rem 8rem;  
      margin-top: -20rem;
    }

    @media (min-width: 912px) and (min-height: 1368px) {
      width: 80rem;
      margin-top: -32rem;
    }

    @media (min-width: 1024px) {
      height: 150rem;
      width: 100rem;
      padding: 0rem 12rem 0rem 12rem;
    }

    @media (min-width: 1024px) and (min-height: 600px) {
      padding: 0rem 8rem 0rem 8rem;  
      margin-top: 0rem;
    }

    @media (min-width: 1280px) and (min-height: 800px) {
      width: 110rem;
      margin-top: -5rem;
    }

    @media (min-width: 1300px) {
      width: 110rem;
      height: 78rem;

      margin-top: -22rem;
    }

    @media (min-width: 1360px) {
      width: 120.0rem; 
      height: 70rem;

      padding: 5.6rem;

      align-items: center;
    }
  
    @media (min-width: 1400px) {
      width: 120.0rem; 
      height: 97rem;

      padding: 5.6rem;

      align-items: center;
    }

    > .wrapperBack {
      width: 100%;
      > button {
        color: ${({ theme}) => theme.COLORS.WHITE_300};
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 140%;
      }
    }

    > .wrapperTitle {
      width: 100%;

      > h2 {
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 140%;
    
        color: ${({ theme}) => theme.COLORS.WHITE_300};
      
        @media (min-width: 1300px) {
          margin-bottom: 2rem;
        }
      }
    }
    
    > .rowVersionDesktopOne {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 2.4rem;

      width: 100%;

      @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;

    }

      > .selectImg {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    
        > p {
          color: ${({ theme}) => theme.COLORS.GRAY_400};

          font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 100%;
        } 
      }

      > .wrapperName, .wrapperCategory {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
       
        color: ${({ theme}) => theme.COLORS.GRAY_400};

        font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;

        @media (min-width: 1024px) {
          width: 33%;
        }
     }

     > .wrapperCategory {
     
      > select {
        border: none;
        text-decoration: none;

        padding: 1.6rem;
          
        color: ${({ theme}) => theme.COLORS.GRAY_400};
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

      }
     }
    }

    > .rowVersionDesktopTwo {
      display: flex;
      flex-direction: column;

      gap: 2.4rem;

      width: 100%;

      @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
    }

    .wrapperIngredients, .wrapperPrice {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      color: ${({ theme}) => theme.COLORS.GRAY_400};

      font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    }

      > .wrapperIngredients {
        width: 100%;
          > .wrapperTags {
            display: flex;
            flex-wrap: wrap;

            gap: 1rem;

            width: 100%;
            
            border-radius: 0.8rem;

            background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

            @media (min-width: 1024px) {
            margin-bottom: 3rem;
            padding-left: 0rem;
            width: 100%;
            }
        }

      } 
    }

    > .wrapperDescription  {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      width: 100%;

      color: ${({ theme}) => theme.COLORS.GRAY_400};
      
      font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;

      > textarea {
        border-radius: 0.8rem;

        width: 100%;

        padding: 1.4rem;

        text-align: justify;

        font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
        line-height: 100%;
        font-size: 1.6rem;

        weight: 400;
        height: 10rem;

        border: none;
        box-shadow: none;
        outline: none;

        resize: none;
        overflow-y: auto;

        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

        overflow-y: auto;

        scrollbar-color: transparent transparent; 

        &::-webkit-scrollbar {
            background: transparent;
        }

        @media (min-width: 425px) {
          height: 12rem;
          padding: 2.4rem;
        }

        @media (min-width: 768px) {
          height: 20rem;
          padding: 2.4rem;
        }

      }
    }

    > .buttonSaveOrDelete {
      display: flex;

      gap: 2rem;

      justify-content: end;

      padding-bottom: 4rem;

      width: 100%;

      > .buttonExclude {
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800};
      }
      
      > button {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 500;

        line-height: 120%;

        padding: 2.4rem;

        @media (min-width: 1024px) {
          width: 23.6rem;
          padding: 2.4rem;
          text-align: center;
         
        }
      }
    } 
}
`;

export const DishImgInput = styled.div`
display: flex;

align-items: center;

gap: 0.8rem; 

height: 3.5rem;
width: 100%;

padding: 1.2rem 1.4rem;

border-radius: 0.8rem;

background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

  > label {
   
    cursor: pointer;

    > .share {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;

      width: 100%;
      background: transparent;

      > .share-icon {
        width: 2.4rem;
        height: 2.4rem;
      }

      > span {
        color: ${({ theme}) => theme.COLORS.WHITE_100};
        text-align: center;

        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem; 
      }

    }

    > input {
      display: none;
    }

  }
  
`;

