import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  vermelha: '#e66767',
  backgroundColor: '#FFF8F2',
  footerBackgroundColor: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.backgroundColor};
    color: ${cores.vermelha};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
