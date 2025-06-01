import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
  }

  h2 {
    margin-top: 0;
    color: #34495e;
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.4rem;
  }
`;

export default GlobalStyle;
