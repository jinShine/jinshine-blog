import { TNotionPost } from 'src/common/libraries/notion/types'
import { PostItemContentLayout } from '../atoms/PostItemContentLayout'
import { PostItemDate } from '../atoms/PostItemDate'
import { PostItemDescription } from '../atoms/PostItemDescription'
import { PostItemInnerLayout } from '../atoms/PostItemInnerLayout'
import { PostItemLayout } from '../atoms/PostItemLayout'
import { PostItemTags } from '../atoms/PostItemTags'
import { PostItemTitle } from '../atoms/PostItemTitle'
import { PostThumbnail } from '../molecules/PostThumbnail'

type TProps = {
  post: TNotionPost
  onClick: () => void
}

export function PostItem({ post, onClick }: TProps) {
  const item = post

  return (
    <PostItemLayout onClick={onClick}>
      <PostItemInnerLayout>
        <PostThumbnail post={item} />
        <PostItemContentLayout>
          <PostItemTitle title={item.properties.title} />
          <PostItemDate createAt={item.properties.createdAt} />
          <PostItemDescription desc={item.properties.description} />
          <PostItemTags tags={item.properties.tags} />
        </PostItemContentLayout>
      </PostItemInnerLayout>
    </PostItemLayout>
  )
}
