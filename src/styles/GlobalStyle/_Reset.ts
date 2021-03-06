import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  html,
  body {
    height: 100%;
    background-color: white;
    color: white;
    font-family: 'Be Vietnam Pro';
    background-color: black;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font-family: 'Be Vietnam Pro';
    -webkit-tap-highlight-color: transparent !important;
    -webkit-touch-callout: none !important;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    display: inline;
    text-decoration: none;
  }
`;

export default Reset;
