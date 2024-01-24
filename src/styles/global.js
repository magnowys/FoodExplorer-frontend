import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%; /* 10px - responsividade*/ 
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-size: 1.6rem; /*responsividade - tamanho de fonte relativo*/

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a, textarea {
    font-family: ${({ theme }) => theme.FONTS.FONT_PRIMARY};
    font-size: 1.6rem;
    outline: none; 
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;