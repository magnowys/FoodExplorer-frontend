import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 

  height: 11.4rem;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   
  > .box.centered {
    justify-content: center;
  }

  > .box.spaced {
    justify-content: space-between;
  }

 > .box {
    display: flex;
    flex-direction: row;
    
    align-items: center;
    
    height: 3.4rem;

    gap: 2rem;

    margin: 0 auto;
  
    justify-content: center;

    > .replacementForSearch {
    height: 4.5rem;
    width: 45%;

    padding: 1.2rem 1.4rem;

    @media (min-width: 1300px) {
      width: 75%;
    }
  }

    > .search {
      display: flex;
      align-items: center;
      gap: 1rem;

      justify-content: center;

      height: 4.5rem;
      width: 45%;

      padding: 1.2rem 1.4rem;
      

      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      border: 0;

      border-radius: 0.5rem;
    }

    > .title {
      display: flex;
      flex-direction: row;

      gap: 0.8rem;

      padding: 0 2rem;

      align-items: center;

      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem; 


      @media (max-width: 1024px) {
        font-size: 1.4rem;
        white-space: nowrap;
      }

      @media (min-width: 1200px) {
        white-space: nowrap;
      }

      > img {
        width: 3.0rem;
        height: 3.0rem;
      }

    }

    > div {
      display: flex;
      gap: 4rem;

      > .favoritesButton, .historicButton {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      font-size: 1.4rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};

      white-space: nowrap;

      border: none; 
      cursor: pointer
      }

      > .requestButton {
        display: flex;
        align-items: center;

        gap: 12px;

        padding: 1.2rem;

        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.COLORS.RED_100};

        > .requestButtonButton {
        background-color: ${({ theme }) => theme.COLORS.RED_100};
        color: ${({ theme }) => theme.COLORS.WHITE_100};

        padding: 0rem auto;

        font-size: 1.4rem;
        font-weight: 500;

        white-space: nowrap;
    
        border: none; 
        cursor: pointer;
        }
      }
      
      > .signOutButton{
        border: none;
        background: transparent;

        cursor: pointer;
      }  
    }
}
`;

export const Search = styled.input`
  width: 90%;

  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
  line-height: 100%;
  
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: 0;

  &:placeholder {
    color:  ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;