import { TNotionPost } from './types'

export const filteredPosts = (posts: TNotionPost[], query: string) => {
  if (query === '전체' || query === undefined) {
    return posts
  }

  return posts.filter(post => post.properties.category === query)
}
