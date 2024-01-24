import styled from 'styled-components';

export const Container = styled.textarea`

  text-align: justify;
  overflow-wrap: break-word;

   
  width: 100%;
  height: auto;

  padding: 1rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;

  border: none;
  box-shadow: none;
  outline: none;

  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE_300};
  background: transparent;

  overflow: hidden;

  rows: 1;

  pointer-events: none;
  user-select: none;
  cursor: default;
  
  padding: 3rem;

  @media (min-width: 1024px) {
    padding: 1.2rem;
  }


`;