import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  position: relative;

  width:100%;
  height: 100vh;

  max-width: 42.8rem;

  margin: 0 auto;

  > .closeMenu {
    display: flex;
    gap: 1.6rem;

    align-items: center;
    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > .buttonCloseMenu {
      border: none;
      background: none;
      cursor: pointer;

      > img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }

    > span {
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
   }
  }
 
  .page {
    width: 100%;
    height: 100vh;
    
    padding: 3.6rem 2.8rem 1.3rem 2.8rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    gap: 3.6rem;

    > .buttonNewDish, .buttonOrders, .buttonSignOut {
      border: none;
      background: transparent;
      cursor: pointer;

      font-weight: 300;
      font-size: 2.4rem;
      line-height: 140%;

      text-align:start;

      color: ${({ theme }) => theme.COLORS.WHITE_300};

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
   }

    > .closeSearch {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      position: absolute;
      top: 23%;
      right: 3.6rem;
      transform: translateY(-50%);
      z-index: 1;

      @media (min-width: 400px) {
        right: 4rem;
      }
      
      @media (min-width: 500px) {
        right: 3rem;
      }

      > .buttonCloseSearch {
        background: transparent;
        border: none;
      }  
    }

    > .carousel {
      > section {
        > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: hidden;
        
        gap: 1rem;

        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;

        > .cards {
          display: flex;
          gap: 1rem;
          flex-shrink: 0; 
        }
      }
    }
  }
}  
`;

export const Arrow = styled.button`
  position: absolute;
  top: 35.5%;
  transform: translateY(-50%);
  border: none;
  filter: opacity(0.7);
  height: 33.5rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-size: 3.5rem;
  background: transparent;
  
  ${({ direction }) => direction === 'prev' ? ` 
      left: 2rem;
  `: ` 
      right: 2rem;
`}
     
  @media (min-width: 600px) {
    top: 35.5%;

    ${({ direction }) => direction === 'prev' ? ` 
      left: 2rem;
    ` : ` 
      right: 2rem;
    `}     
  }

  @media (min-width: 800px) {

    ${({ direction }) => direction === 'prev' ? ` 
      left: 2rem;
    ` : ` 
      right: 2rem;
    `}         
  }

  @media (min-width: 1000px) {
    ${({ direction }) => direction === 'prev' ? ` 
      left: 1rem;
    ` : ` 
      right: 1rem;
    `} 
  }
`;
