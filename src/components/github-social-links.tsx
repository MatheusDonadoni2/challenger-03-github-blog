import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function GithubSocialLinks() {
  return (
    <footer className="flex gap-[1.5rem]">
      <a href="#">
        <span className="flex items-center gap-[0.5rem]">
          <FontAwesomeIcon icon={faGithub} className="text-c-base-label" />
          <span className="text-c-base-subtitle">matheusDonadoni2</span>
        </span>
      </a>

      <a href="#">
        <span className="flex items-center gap-[0.5rem]">
          <FontAwesomeIcon icon={faBuilding} className="text-c-base-label" />
          <span className="text-c-base-subtitle">Donsdoni</span>
        </span>
      </a>

      <a href="#">
        <span className="flex items-center gap-[0.5rem]">
          <FontAwesomeIcon icon={faUserGroup} className="text-c-base-label" />
          <span className="text-c-base-subtitle">0 Seguidores</span>
        </span>
      </a>
    </footer>
  )
}
