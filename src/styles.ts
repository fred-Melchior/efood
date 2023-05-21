import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#fff',
  branco: '#F5F5F5',
  red: '#E66767',
  ocre: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branco};
  }

  .container {
    width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
