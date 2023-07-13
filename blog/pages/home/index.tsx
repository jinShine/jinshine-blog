import { VStack } from '@chakra-ui/react'
import { CONFIG } from 'config'
import { NextPageWithLayout } from 'pages/_app'
import { useEffect } from 'react'
import { useCache } from 'src/common/hooks/useCache'
import { convertPostDatas } from 'src/common/libraries/notion/convertPostDatas'
import { filteredPosts } from 'src/common/libraries/notion/filteredPosts'
import { getCategories } from 'src/common/libraries/notion/getCategories'
import { getPosts } from 'src/common/libraries/notion/notionAPI'
import { TNotionPost } from 'src/common/libraries/notion/types'
import Layout from 'src/components/@common/layout'
import PostItem from 'src/components/units/post_item'

type HomeProps = {
  posts: TNotionPost[]
  categories: { category: string; length: number }[]
}

export async function getServerSideProps(context: any) {
  const query = context.query.category

  const posts = await getPosts()
  const convertPosts = convertPostDatas(posts)
  const categories = getCategories(convertPosts)

  const results = filteredPosts(convertPosts, query)

  return {
    props: {
      posts: results,
      categories,
    },
  }
}

const HomePage: NextPageWithLayout<HomeProps> = (props: HomeProps) => {
  const { setPosts, setCategories } = useCache()
  // const { data: posts, isLoading } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: getPosts,
  //   initialData: props.posts,
  // })

  useEffect(() => {
    setPosts(props.posts)
    setCategories(props.categories)
  }, [props.posts])

  return (
    <VStack width={'100%'} spacing={10}>
      {props.posts.map(post => (
        <PostItem key={post.id} postData={post} />
      ))}
    </VStack>
  )
}

HomePage.getLayout = function getlayout(page) {
  return (
    <Layout
      metadata={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'Website',
        image: CONFIG.profile.image,
        url: CONFIG.link,
      }}>
      {page}
    </Layout>
  )
}

export default HomePage
