import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    font-size: 62.5%;
    line-height: 1.6;
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    background-image: linear-gradient(to right bottom, #f1f6eb, #e9f5ec, #e2f3ef, #ddf0f2, #dcedf4, #d8eef7, #d5eefa, #d1effd, #c5f5fb, #c1faf1, #c9fde0, #ddfdcc);
    color: ${({ theme }) => theme.colors.dark};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;