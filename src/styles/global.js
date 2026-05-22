import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f1f5f9;
    color: #1e293b;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

export default Global;
