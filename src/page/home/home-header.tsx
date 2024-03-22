import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'

import {
  getGithubUser,
  keyGetGithubUser,
} from '@/lib/api/request/get-github-user'

export function HomeHeader() {
  const { data: githubUser } = useQuery({
    queryFn: () => getGithubUser({ user: 'rocketseat-education' }),
    queryKey: [keyGetGithubUser],
  })

  return (
    <div className="flex h-[13.25rem] gap-[2rem] rounded-[10px] bg-c-base-profile px-[2.5rem] py-[2rem] drop-shadow-lg">
      <img
        src={githubUser?.avatar_url}
        className="h-[9.5rem] w-[9.5rem] rounded-[8px]"
        alt="Foto do usuário"
      />
      <div className="flex flex-col justify-between">
        <header className="flex flex-col justify-between gap-[0.5rem] ">
          <section className="flex justify-between">
            <h1 className="text-[1.5rem] font-bold leading-snug text-c-base-title">
              {githubUser?.name}
            </h1>
            <a href={githubUser?.html_url}>
              <span className="flex items-center gap-[0.5rem] font-bold leading-relaxed text-c-blue hover:border-b-2 hover:border-c-blue">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </a>
          </section>
          <p className="text-base leading-relaxed text-c-base-text">
            {githubUser?.bio}
          </p>
        </header>

        <footer className="flex gap-[1.5rem]">
          <span className="flex items-center gap-[0.5rem]">
            <FontAwesomeIcon icon={faGithub} className="text-c-base-label" />
            <span className="text-c-base-subtitle">{githubUser?.login}</span>
          </span>

          {githubUser?.company && (
            <span className="flex items-center gap-[0.5rem]">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-c-base-label"
              />
              <span className="text-c-base-subtitle">
                {githubUser?.company}
              </span>
            </span>
          )}

          <span className="flex items-center gap-[0.5rem]">
            <FontAwesomeIcon icon={faUserGroup} className="text-c-base-label" />
            <span className="text-c-base-subtitle">
              {githubUser?.followers} Seguidores
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}
