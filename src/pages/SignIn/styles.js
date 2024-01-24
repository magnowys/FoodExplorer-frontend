import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 15.8rem 4.7rem 30.0rem 4.7rem;

  white-space: nowrap;

@media (min-width: 1024px) {
  max-width: 102.4rem;

  display: flex;

  gap: 17rem;
  
  flex-direction: row;
 
  align-items: center;

  padding: 7rem 3rem 5rem 3rem;
}
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  
  gap: 3.2rem;

  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  @media (min-width: 1024px) {
    width: 47.6rem;
    height: 50.4rem;

    padding: 6.4rem;

    border-radius: 1rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   }

  .wrap {
    display: flex;
    flex-direction: column;

    align-items: start;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
   
    gap: 2rem;

    button {
      width: 31.6rem;
      height: 4.8rem;

      margin: 0 auto;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }

    .loader {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > .buttonSignUp {
      border: none;
      background: none;
      cursor: pointer;
      
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;

      margin: 0 auto;
      margin-bottom: 2.8rem;
      
      color:  ${({ theme }) => theme.COLORS.WHITE_100}; 
    }

    @media (min-width: 1024px) {
      width: 35rem;

      padding: 0rem;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  > .wrap #loginIn {
    margin: 0 auto;
  
    > h2 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
     
      @media (min-width: 1024px) {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        color: ${({ theme }) => theme.COLORS.WHITE_100}; 
        }
    }
  }

  .Data {
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 100%;

    > span {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-weight: 400;
    font-size: 1.6rem;

    margin-bottom: 1rem;
  
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    @media (min-width: 1024px) {
      margin-bottom: 2px;
      margin-top: 1.1rem;
      margin-bottom: 1rem;
    }   
  }
  }
`;