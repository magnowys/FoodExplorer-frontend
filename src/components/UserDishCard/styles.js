import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border: none;
  max-width: 18.5rem;
  border-radius: 8px;
 
  background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  @media (min-width: 1024px) {
    max-width: 28rem;
    }

  > main {
  > button {
    border: none;
    background: transparent;

    position: absolute;
    top: 7%;
    right: 5%;

    width: 2.4rem;
    height: 2.2rem;

    svg {
            width: 2.6rem;
            height: 2.6rem;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
        }
        .redHeart {
            color: ${({ theme }) => theme.COLORS.RED_100};
        }

    @media (min-width: 1024px) {
      width: 3rem;
      height: 3rem;
    }
  }
}

  @media (min-width: 1024px) {
    display: flex;
    height: 46.2rem;
    width: 90rem;
 
    flex-direction: column;
    align-items: center;
    gap: 1.5rem; 
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
 
  gap: 0.8rem;
  padding: 3rem 2rem 1rem;

  width: 19.0rem;
  flex: 1;

  height: 29.2rem;

  @media (min-width: 1024px) {
    height: 46.2rem;
    width: 28rem;

    gap: 1.8rem;
  }

  > .dish {
    width: 8.8rem;
    height: 8.8rem;

    border-radius: 50%; 
    
    @media (min-width: 1024px) {
      width: 17.6rem;
      height: 17.6rem;  
    }
  }

  > .titleDishButton {
    background: transparent;
    border: none;
    cursor: pointer;
    
    > .titleDish {
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;

      text-align: center;

      color: ${({ theme }) => theme.COLORS.WHITE_300}; 

      white-space: nowrap;

      margin:0;

      svg {
        margin-right: 0;
      }

      @media (min-width: 1024px) {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
      }
    }
  }

  > .textArea {
    width: 100%;
    height: 9.4rem;
    margin: -2rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  > .dishDescription {
    text-align: justify;
    background: blue;

    @media (min-width: 1024px) {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};

      color: ${({ theme }) => theme.COLORS.GRAY_400};

      width: 22.0rem; 
      white-space: pre-line;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
  }

  .price {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    color: ${({ theme }) => theme.COLORS.BLUE_100};

    @media (min-width: 912px) and (min-height:1368px){
      font-size: 2.6rem;
      line-height: 160%;
    }
    
    @media (min-width: 1024px) {
      font-size: 2.6rem;
      line-height: 160%;
    }
  }

  .wrapperAmountInclude {
  
    display:flex;
    flex-direction: column;

    gap: 1.6rem;

    justify-content: center;
    align-items: center;
 
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    > .amount {
      display: flex;
    
      align-items: center;
      justify-content: center;

      width: 10.0rem;
      height: 3.2rem;


      > .counter {
        display: flex;

        button {
        border: none;
        background: transparent;

        > img {
          width: 2rem;
          height: 2rem;
        }
        }

        > input {
          color: ${({ theme }) => theme.COLORS.WHITE_300};
          font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
          font-weight: 400;
          font-size: 1.6rem;

          width: 4rem;
          height: 2rem;

          display: flex;
          align-items: center;

          text-align: center;

          border: none;
          background: transparent;
        }
      }
    }

    > button {
      width: 16.2rem;
      height: 3.2rem; 

      border-radius: 5px;

      @media (min-width: 1024px) {
        width: 7.4rem;
        height: 4.4rem; 
      }
  }

  }
`;