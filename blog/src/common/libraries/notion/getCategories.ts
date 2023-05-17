import { TNotionPost } from './types'

export const getCategories = (posts: TNotionPost[]) => {
  const categories = Array.from(
    new Set(posts.map(post => post.properties.category) as string[]),
  ).map(category => {
    const length = posts.filter(post => post.properties.category === category).length
    return { category, length }
  })

  categories.splice(0, 0, { category: '전체', length: posts.length })

  return categories
}
