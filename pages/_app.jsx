import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/components/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Mulish', sans-serif;
    letter-spacing: 0.3px;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: all 0.3s
  }

  a:hover {
    color: ${props => props.theme.primaryHover}
  }
`

function App ({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400&display=swap" rel="stylesheet"></link>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  )
}

export default App