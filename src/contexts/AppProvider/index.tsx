import { AuthProvider } from '../AuthProvider'
import { AppProviderProps } from './types'

const AppProvider = ({ children, pageProps }: AppProviderProps) => {
  return <AuthProvider pageProps={pageProps.session}>{children}</AuthProvider>
}

export default AppProvider
