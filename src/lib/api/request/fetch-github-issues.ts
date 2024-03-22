import { apiGithub } from '../api-github'

export interface FetchGithubIssuesResponse {
  id: number
  number: number
  title: string
  body: string
  html_url: string
  comments: number
  created_at: Date
  user: {
    login: string
  }
}
export const keyFetchGithubIssues = 'key-fetch-github-issues'
export async function fetchGithubIssues(query?: string | null) {
  query = query?.concat('%20') || ''
  const GITHUB_REPOSITORY = 'reactjs-github-blog-challenge'
  const GITHUB_USERNAME = 'rocketseat-education'

  console.log(`${query} repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`)

  const {
    data: { items },
  } = await apiGithub.get<{ items: FetchGithubIssuesResponse[] }>(
    `search/issues`,
    {
      params: {
        q:
          query !== undefined
            ? `${query} repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`
            : `repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      },
    },
  )

  console.log(items.length)

  return items
}
