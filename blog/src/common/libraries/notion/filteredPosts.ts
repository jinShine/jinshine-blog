import { TNotionPost } from './types'

export const filteredPosts = (
  posts: TNotionPost[],
  query: string | string[] | undefined,
) => {
  if (query === '전체' || query === undefined) {
    return posts
  }

  return posts.filter(post => post.properties.category === query)
}
