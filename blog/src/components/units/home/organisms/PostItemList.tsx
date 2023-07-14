import { TNotionPost } from 'src/common/libraries/notion/types'
import { PostItem } from './PostItem'

type TProps = {
  posts: TNotionPost[]
  onClick: (post: TNotionPost) => void
}

export function PostItemList({ posts, onClick }: TProps) {
  return (
    <>
      {posts?.map(post => (
        <PostItem key={post.id} post={post} onClick={() => onClick(post)} />
      ))}
    </>
  )
}
