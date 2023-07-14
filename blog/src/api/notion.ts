import { TNotionPost } from 'src/common/libraries/notion/types'
import { TCategory } from 'src/components/@common/layout/organisms/CategoryList'

type TPosts = {
  posts: TNotionPost[]
  categories: TCategory[]
}

export const getPostsAPI = async (
  category: string | string[] | undefined,
): Promise<TPosts> => {
  let url = `/api/notion/posts`
  if (category) url += `?category=${category}`

  return await fetch(url).then(res => res.json())
}
