import { useRecoilState } from 'recoil'
import { categoriesState, postsState, selectedPostState } from '../store/atom'

export const useCache = () => {
  const [posts, setPosts] = useRecoilState(postsState)
  const [categories, setCategories] = useRecoilState(categoriesState)
  const [selectedPost, setSelectedPost] = useRecoilState(selectedPostState)

  return {
    posts,
    setPosts,
    selectedPost,
    setSelectedPost,
    categories,
    setCategories,
  }
}
