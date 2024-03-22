import { useQuery } from '@tanstack/react-query'
import { createContext, ReactNode, useState } from 'react'

import {
  fetchGithubIssues,
  FetchGithubIssuesResponse,
  keyFetchGithubIssues,
} from '@/lib/api/request/fetch-github-issues'

type IssuesProps = FetchGithubIssuesResponse

interface IssuesContextProps {
  issues: IssuesProps[]
  handleFetchGithubIssues: (query?: string | null) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextProps)

interface IssuesProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  useQuery({
    queryKey: [keyFetchGithubIssues],
    queryFn: () => handleFetchGithubIssues(),
  })

  const [issues, setIssues] = useState<IssuesProps[]>([])

  async function handleFetchGithubIssues(query?: string | null) {
    const data = await fetchGithubIssues(query)
    setIssues(data)
  }

  return (
    <IssuesContext.Provider
      value={{
        issues,
        handleFetchGithubIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
