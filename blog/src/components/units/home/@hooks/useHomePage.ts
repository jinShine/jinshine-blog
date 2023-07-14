import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getPostsAPI } from 'src/api/notion'
import { useCache } from 'src/common/hooks/useCache'
import { TNotionPost } from 'src/common/libraries/notion/types'

export type TUseHomePage = ReturnType<typeof useHomePage>

export const useHomePage = () => {
  const router = useRouter()
  const { posts, setPosts, categories, setCategories, setSelectedPost } = useCache()

  const {
    data: postsQuery,
    isLoading: postsLoading,
    isError: postsError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostsAPI(router.query.category),
  })

  useEffect(() => {
    setPosts(postsQuery?.posts || [])
    setCategories(postsQuery?.categories || [])
  }, [postsQuery, router])

  const onClick = (post: TNotionPost) => {
    setSelectedPost(post)
    router.push(`posts/${post.id}`)
  }

  return {
    posts,
    categories,
    error: postsError,
    loading: postsLoading,
    onClick,
  }
}
