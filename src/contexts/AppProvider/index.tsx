import { ChallengesProvider } from '../ChallengesProvider'
import { CountdownProvider } from '../CountdownProvider'
import { AppProviderProps } from './types'

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChallengesProvider>
      <CountdownProvider>{children}</CountdownProvider>
    </ChallengesProvider>
  )
}

export default AppProvider
