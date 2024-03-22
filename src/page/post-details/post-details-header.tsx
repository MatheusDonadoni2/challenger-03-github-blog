import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import { DateUtils } from '@/lib/dayjs'

interface PostDetailsHeaderProps {
  data: {
    title: string
    html_url: string
    comments: number
    created_at: Date
    user: {
      login: string
    }
  }
}

export function PostDetailsHeader({ data }: PostDetailsHeaderProps) {
  return (
    <div className="flex h-[10.5rem] flex-col rounded-[10px] bg-c-base-profile px-[2.5rem] py-[2rem] drop-shadow-lg">
      <section className="flex w-full justify-between ">
        <NavLink to={'/'}>
          <span className="flex items-center gap-[0.5rem] font-bold leading-relaxed text-c-blue hover:border-b-2 hover:border-c-blue ">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </span>
        </NavLink>

        <a href={data.html_url}>
          <span className="flex items-center gap-[0.5rem] font-bold leading-relaxed text-c-blue hover:border-b-2 hover:border-c-blue">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </a>
      </section>

      <section className="flex h-full items-center">
        <h1 className="text-[1.5rem] font-bold text-c-base-title">
          {data.title}
        </h1>
      </section>

      <footer className="flex gap-[1.5rem]">
        <span className="flex items-center gap-[0.5rem]">
          <FontAwesomeIcon icon={faGithub} className="text-c-base-label" />
          <span className="text-c-base-subtitle">{data.user.login}</span>
        </span>

        <span className="flex items-center gap-[0.5rem]">
          <FontAwesomeIcon icon={faCalendarDay} className="text-c-base-label" />
          <span className="text-c-base-subtitle">
            {DateUtils.fromNow(data.created_at)}
          </span>
        </span>

        <span className="flex items-center gap-[0.5rem]">
          <FontAwesomeIcon icon={faComment} className="text-c-base-label" />
          <span className="text-c-base-subtitle">
            {data.comments} comentários
          </span>
        </span>
      </footer>
    </div>
  )
}
