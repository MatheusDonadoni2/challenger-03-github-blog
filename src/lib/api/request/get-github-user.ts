import { apiGithub } from '../api-github'

export interface GetUserProps {
  user: string
}

export interface GetUserPropsResponse {
  login: string
  name: string
  avatar_url: string
  html_url: string
  followers: number
  company: string | null
  bio: string
  repos_url: string
}

export const keyGetGithubUser = 'key-get-github-user'

export async function getGithubUser({ user }: GetUserProps) {
  const { data } = await apiGithub.get<GetUserPropsResponse>(`users/${user}`)
  return data
}
