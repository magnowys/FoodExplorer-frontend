import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;

  background: none;
  color: ${({ theme}) => theme.COLORS.WHITE_300};
 
  border: none;

  cursor: pointer;

  @media (min-width: 500px) {
    font-size: 2.4rem;   
  }
`;