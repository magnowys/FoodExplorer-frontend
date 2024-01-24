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
  overflow-x: hidden;

  > main { 
    grid-area: main;
   
    margin: 0 auto;

    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
    }
       
    @media (min-width: 768px) {
      padding-top: 7rem;
    }

    @media (min-width: 1024px) {
      padding-top: 10rem;
      max-width: 102.4rem;
    }

    @media (min-width: 1280px) {
      padding-top: 15rem;
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

    @media (min-width: 412px) {
      height:70rem;
    }

    @media (min-width: 500px) {
      align-items: start;
      justify-content: start;
    }

    @media (min-width: 768px) {
      height:100rem;
      padding-top: 0rem;
    }

    @media (min-width: 912px) {
      height:100%;
      width: 100%;
      padding: 8.6rem 0.5rem;
      padding-bottom: 1rem;
    }

    @media (min-width: 820px) {
      display: flex;
      flex-direction: row;

      align-items: end;

      gap: 5.6rem;
    
      width: 100rem;
      height: 48rem;

      padding: 0 6rem 0 8rem;
      margin-top: -18rem;
    }

    @media (min-width: 1280px) {
      width: 110rem;
      height: 43rem;
    }

    @media (min-width: 1400px) {
      width: 120.0rem; 
      height: 77rem;

      padding: 0 20rem 0 22rem; 
      margin-top: -26rem;
 
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

     
  > .buttonEdit {
    padding-bottom: 4rem;
    margin: 0 auto; 

    > button { 
      width: 18.6rem;  
      margin: 0 auto; 
      line-height: 2.4px;
      padding: 2.4rem;
      border-radius: 0.5rem; 

      @media (min-width: 1024px) {
        width: 13.6rem;
        height: 4rem;
        padding: 2.4rem;
      }
    }
  }
} 
}
`;

