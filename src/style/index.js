import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background: linear-gradient(to bottom right, #fff2dc, #d7d8ff);
    color: #363759;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px;
  }

  ul {
    list-style: none;
  }

  li {
    height: 100px;
    border: 1px solid red;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
