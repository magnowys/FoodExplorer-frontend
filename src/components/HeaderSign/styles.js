import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1.1rem;
  
  max-width: 100%;
  
  img {
      width: 4.7rem;
      height: 4.7rem;
    
      @media (min-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
      }
  } 

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-weight: 700;
    font-size: 3.7rem;
    line-height: 4.4rem;

    @media (min-width: 768px) {
      font-size: 4.2rem;
      }
  }

  `;