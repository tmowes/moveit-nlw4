import { CountdownProvider } from '../CountdownProvider'
import { AppProviderProps } from './types'

const AppProvider = ({ children }: AppProviderProps) => {
  return <CountdownProvider>{children}</CountdownProvider>
}

export default AppProvider
