import { VStack } from '@chakra-ui/react'
import { CONFIG } from 'config'
import { convertPostDatas } from 'src/common/libraries/notion/convertPostDatas'
import { getPosts } from 'src/common/libraries/notion/notion'
import { TNotionPost } from 'src/common/libraries/notion/types'
import Layout from 'src/components/Layouts'
import PostItem from 'src/components/units/post_item'
import { NextPageWithLayout } from './_app'

type HomeProps = {
  posts: TNotionPost[]
}

export async function getStaticProps() {
  const posts = await getPosts()
  const result = convertPostDatas(posts)
  console.log('# Posts 데이터 : ', result)

  return {
    props: { posts: result },
  }
}

const HomePage: NextPageWithLayout<HomeProps> = (props: HomeProps) => {
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
        type: 'website',
        url: CONFIG.link,
      }}>
      {page}
    </Layout>
  )
}

export default HomePage
