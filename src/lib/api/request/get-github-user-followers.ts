import { apiGithub } from '../api-github'

export interface GetGithubUserFollowersRequest {
  user: string
}

export interface GetGithubUserFollowersResponse {
  login: string
}

export const keyGetGithubUserFollowers = 'key-get-github-user-followers'

export async function getGithubUserFollowers({
  user,
}: GetGithubUserFollowersRequest) {
  const { data } = await apiGithub.get<GetGithubUserFollowersResponse[]>(
    `/users/${user}/following`,
  )
  return data
}
