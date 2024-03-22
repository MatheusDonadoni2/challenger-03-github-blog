import { apiGithub } from '../api-github'

export interface GetGithubIssueResponse {
  id: number
  title: string
  body: string
  html_url: string
  comments: number
  created_at: Date
  user: {
    login: string
  }
}

export const keyGetGithubIssue = 'key-get-github-issue'
export async function getGithubIssue(number: string | undefined) {
  if (!number) return

  const repo = 'rocketseat-education/reactjs-github-blog-challenge'
  const { data } = await apiGithub.get<GetGithubIssueResponse>(
    `/repos/${repo}/issues/${number}`,
  )

  return data
}
