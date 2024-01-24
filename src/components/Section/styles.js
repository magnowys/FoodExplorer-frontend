import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;

  padding: 0 1rem;

  h2 {
    margin: 2rem 0;
    margin-left: -2rem;

    color: ${({ theme }) => theme.COLORS.WHITE_300};
    
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;

    @media (min-width: 768px) {
      margin-left: -2.3rem;
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      margin-left: -2.6rem;
      font-size: 3rem;
    }
  }
`;