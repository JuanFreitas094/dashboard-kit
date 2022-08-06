import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Mulish', sans-serif;
    letter-spacing: 0.3px;
  }

  ::placeholder {
    font-family: 'Mulish', sans-serif;
    opacity: 0.4;
    padding-left: 10px;
  }

  button {
    font-family: inherit;
  }

  a {
    color: #3751FF;
    text-decoration: none;
  }
`

function App ({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400&display=swap" rel="stylesheet"></link>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App