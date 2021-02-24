import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AppProvider } from '~/contexts'
import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
