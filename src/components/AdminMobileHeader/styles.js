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

  @media (min-width: 768px) {
    gap: 30rem;
  }

  > button {
    border:none;
    background:transparent;

    img {
      width: 1rem;
      @media (min-width: 320px) {
        width: 2rem;
      }
    }
  }

  > .title {
    display: flex;
    flex-direction: row;

    gap: 0.8rem;
    
    align-items: center;

    padding: 0 3rem;

    > .logoSvg {
      width: 1rem;
      height: 1.8rem;
   
      @media (min-width: 320px) {
        width: 1.8rem;
      }

      @media (min-width: 425px) {
        width: 2.2rem;
        height: 2.2rem;
      }
    }

    > .wrapper {
      display: flex;
      flex-direction: row;

      gap: 0.8rem;

      align-items: center;

      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-style: normal;

      line-height: 1rem;
    
      > h1 {
      font-size: 1.2rem;
      font-weight: 700;

      white-space: nowrap;

      color: ${({ theme }) => theme.COLORS.WHITE_100};

      @media (min-width: 320px) {
        font-size: 1.38rem;
        line-height: 2rem;
      }

      @media (min-width: 425px) {
        font-size: 2.1rem;
      }

      }

      > p {
        font-size: 0.9rem;
        font-weight: 400;
        
        line-height: 140%;

        text-align: center;

        color: ${({ theme }) => theme.COLORS.BLUE_100};

        @media (min-width: 425px) {
        font-size: 1.2rem;
        }
      }

    }
  }
 `;