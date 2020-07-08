import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;

    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--twitter);
  }

  html, border-style, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  }

  html {
    background: var(--primary)
  }

  :root {
    --primary: #000;
    --secondary: #15181c;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #7159c1;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --twitter-verify: #1da1f2;
  }
`;
