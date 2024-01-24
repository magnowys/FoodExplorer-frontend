import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 0.5rem;

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 1.2rem 1.4rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: 0;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-weight: 400;
      font-size: 1.6rem;

      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  > svg {
    margin-left: 1.4rem;
  }

  > input:focus {
    border: 1px solid #FFFFFF;
    border-radius: 0.5rem;
  }
 
`;