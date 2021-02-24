import { ChallengesProvider } from '../ChallengesProvider'
import { AppProviderProps } from './types'

const AppProvider = ({ children }: AppProviderProps) => {
  return <ChallengesProvider>{children}</ChallengesProvider>
}

export default AppProvider
