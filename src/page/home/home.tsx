import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { IssuesContext } from '@/context/issues.context'

import { HomeCard } from './home-card'
import { HomeHeader } from './home-header'
import { HomeSearchForm } from './home-search-form'

export function Home() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('issue')

  const { issues, handleFetchGithubIssues } = useContext(IssuesContext)

  function handle() {
    handleFetchGithubIssues(query)
  }

  useEffect(() => {
    handle()
  }, [query])

  return (
    <div className="w-full">
      <HomeHeader />
      <HomeSearchForm countIssues={issues?.length} />
      <div className="grid grid-cols-2 gap-[2rem] py-[3rem]">
        {issues?.map((issue) => {
          return <HomeCard key={issue.id} data={issue} />
        })}
      </div>
    </div>
  )
}
