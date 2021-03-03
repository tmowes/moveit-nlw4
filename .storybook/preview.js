import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/GlobalStyles'
import * as themes from '../src/styles/themes'

export const decorators = [
  Story => (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
