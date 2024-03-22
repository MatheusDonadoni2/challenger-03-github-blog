import { useQuery } from '@tanstack/react-query'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import {
  getGithubIssue,
  keyGetGithubIssue,
} from '@/lib/api/request/get-github-issue'

import { PostDetailsHeader } from './post-details-header'

export function PostDetail() {
  const { number } = useParams()
  const { data: postDetails, isFetching } = useQuery({
    queryKey: [keyGetGithubIssue],
    queryFn: () => getGithubIssue(number),
  })

  return (
    <div>
      {!isFetching && postDetails && (
        <>
          <PostDetailsHeader
            data={{
              comments: postDetails.comments,
              created_at: postDetails?.created_at,
              html_url: postDetails?.html_url,
              title: postDetails?.title,
              user: postDetails?.user,
            }}
          />
          <div className="px-[2rem] py-[2.5rem]">
            <Markdown remarkPlugins={[[remarkGfm]]} skipHtml={true}>
              {postDetails?.body}
            </Markdown>
          </div>
        </>
      )}
    </div>
  )
}
