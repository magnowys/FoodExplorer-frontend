import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 

  height: 11.4rem;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  display: flex;
  flex-direction: row;
  
  align-items: center;

  gap: 1rem;

  width: 100%;
  
  height: 3.4rem;

  justify-content: center;

  @media (min-width: 320px) {
    justify-content: space-between;
  }

  > button {
    border: none;
    background: transparent;
    padding: 0; 
    cursor: pointer;
    
    position: relative;

    img {
      width: 1.5rem;

      @media (min-width: 320px) {
        width: 2rem;
      }
    }
  }

  > button:nth-child(3) {     
    position: relative;
  }

  > button .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    border-radius: 50%;

    background: ${({ theme }) => theme.COLORS.RED_300};
    color: white;
    
    width: 1.2rem;
    height: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    @media (min-width: 320px) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  
  > .title {
    display: flex;
    flex-direction: row;

    gap: 0.8rem;
    
    align-items: center;

   >  h1 {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2rem; 

    @media (min-width: 320px) {
      font-weight: 700;
      font-size: 1.6rem;
    }   
    
    @media (min-width: 500px) {
      font-weight: 700;
      font-size: 2rem;
    }  
  }

  > img {
    width: 1.6rem;
    height: 1.6rem;

    @media (min-width: 500px) {
      width: 1.6rem;
      height: 3rem;
    }  
  }
  
  }

 `;
