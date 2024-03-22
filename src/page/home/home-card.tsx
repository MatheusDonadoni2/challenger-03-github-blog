import { NavLink } from 'react-router-dom'

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FetchGithubIssuesResponse } from '@/lib/api/request/fetch-github-issues'
import { DateUtils } from '@/lib/dayjs'

interface HomeCardProps {
  data: FetchGithubIssuesResponse
}

export function HomeCard({ data }: HomeCardProps) {
  return (
    <NavLink to={`/post-details/${data.number}`}>
      <CardContent className="border-sizing box-border h-[298px] space-y-[1.25rem] overflow-hidden text-ellipsis rounded-[10px] bg-c-base-post p-[2rem] ">
        <CardHeader>
          <CardTitle className="flex items-start justify-between gap-2">
            <span>
              <h1 className="line-clamp-2 text-xl font-bold text-c-base-title">
                {data.title}
              </h1>
            </span>
            <span>
              <time className="flex-nowrap whitespace-nowrap text-nowrap text-right text-[0.875rem] text-c-base-span">
                {DateUtils.fromNow(data.created_at)}
              </time>
            </span>
          </CardTitle>
        </CardHeader>
        <CardDescription className="line-clamp-6 overflow-hidden text-ellipsis text-base text-c-base-text">
          {data.body}
        </CardDescription>
      </CardContent>
    </NavLink>
  )
}
