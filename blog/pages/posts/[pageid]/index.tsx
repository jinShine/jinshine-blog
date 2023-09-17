import { Box, useColorModeValue } from '@chakra-ui/react'
import { CONFIG } from 'config'
import { ExtendedRecordMap } from 'notion-types'
import { NextPageWithLayout } from 'pages/_app'
import { convertPostDatas } from 'src/common/libraries/notion/convertPostDatas'
import * as notion from 'src/common/libraries/notion/notionAPI'
import { TNotionPost } from 'src/common/libraries/notion/types'
import Layout from 'src/components/@common/layout'
import { NotionPage } from 'src/components/NotionRenderer'
import CommentBox from 'src/components/units/comment_box'
import PostDetailHeader from 'src/components/units/post_detail_header'

export const getServerSideProps = async (context: any) => {
  const { pageid } = context.params

  try {
    const recordMap = await notion.getPage(pageid)
    const posts = await notion.getPosts()
    const convertPosts = convertPostDatas(posts)
    const post = convertPosts.filter(post => post.id === pageid)[0]

    return {
      props: {
        recordMap,
        post,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

type PostDetailProps = {
  recordMap: ExtendedRecordMap
  post: TNotionPost
}

const PostDetailPage: NextPageWithLayout<PostDetailProps> = (props: PostDetailProps) => {
  return (
    <Box
      width={'full'}
      minHeight={'100vh'}
      borderRadius={'xl'}
      boxShadow={'sm'}
      bgColor={useColorModeValue('point.light', 'point.dark')}>
      <PostDetailHeader postData={props.post} />
      <NotionPage recordMap={props.recordMap} rootPageId={CONFIG.notion.rootDatabaseId} />
      <Box mt={20} pb={5} px={{ base: 4, sm: '20px', md: '44px', lg: '68px' }}>
        <CommentBox postData={props.post} />
      </Box>
    </Box>
  )
}

PostDetailPage.getLayout = function getlayout(page) {
  const post = page.props?.post as TNotionPost

  console.log('PostDetailPage :', post)

  return (
    <Layout
      metadata={{
        title: post.properties.title ?? CONFIG.blog.title,
        description: post.properties.description ?? CONFIG.blog.description,
        type: 'Website',
        image: post.properties.thumbnail,
        url: `${CONFIG.link}/posts/${post.id}`,
      }}>
      {page}
    </Layout>
  )
}

export default PostDetailPage
