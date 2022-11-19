import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  html, body {
    
    background: #282828;
    width: 100%;
    height: 100%;
    font-family: 'Roboto Mono', monospace;
    color: #dadada
  }
  input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    background: transparent;
    color: #dadada;
  }

  .App {
    padding: 20px;
  }
`
export default GlobalStyles