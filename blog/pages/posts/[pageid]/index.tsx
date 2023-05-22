import { Box, useColorModeValue } from '@chakra-ui/react'
import { CONFIG } from 'config'
import { useRouter } from 'next/router'
import { ExtendedRecordMap } from 'notion-types'
import { NextPageWithLayout } from 'pages/_app'
import { useCache } from 'src/common/hooks/useCache'
import * as notion from 'src/common/libraries/notion/notionAPI'
import Layout from 'src/components/Layouts'
import { NotionPage } from 'src/components/NotionRenderer'
import CommentBox from 'src/components/units/comment_box'
import PostDetailHeader from 'src/components/units/post_detail_header'

export const getServerSideProps = async (context: any) => {
  const { pageid } = context.params

  try {
    const recordMap = await notion.getPage(pageid)

    return {
      props: {
        recordMap,
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
}

const PostDetailPage: NextPageWithLayout<PostDetailProps> = (props: PostDetailProps) => {
  const router = useRouter()
  const { selectedPost } = useCache()

  if (router.isFallback) {
    return <>에러!!~!~!~</>
  }

  return (
    <Box
      width={'full'}
      minHeight={'100vh'}
      borderRadius={'xl'}
      boxShadow={'sm'}
      bgColor={useColorModeValue('point.light', 'point.dark')}>
      {selectedPost && <PostDetailHeader postData={selectedPost} />}
      <NotionPage recordMap={props.recordMap} rootPageId={CONFIG.notion.rootDatabaseId} />
      <Box mt={20} pb={5} px={{ base: 4, sm: '20px', md: '44px', lg: '68px' }}>
        {selectedPost && <CommentBox postData={selectedPost} />}
      </Box>
    </Box>
  )
}

PostDetailPage.getLayout = function getlayout(page) {
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

export default PostDetailPage
