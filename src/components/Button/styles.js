import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  padding: 0rem auto;

  font-size: 1.4rem;
  font-weight: 500;

  border: 0;
  border-radius: 0.5rem;

  &:disabled {
    opacity: 0.5;
  }
`;