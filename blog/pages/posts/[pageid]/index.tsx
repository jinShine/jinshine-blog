import { Box, useColorModeValue } from '@chakra-ui/react'
import { CONFIG, isDev } from 'config'
import { ExtendedRecordMap } from 'notion-types'
import { getAllPagesInSpace } from 'notion-utils'
import { NextPageWithLayout } from 'pages/_app'
import { defaultMapPageUrl } from 'react-notion-x'
import { useCache } from 'src/common/hooks/useCache'
import * as notion from 'src/common/libraries/notion/notionAPI'
import Layout from 'src/components/Layouts'
import { NotionPage } from 'src/components/NotionRenderer'
import CommentBox from 'src/components/units/comment_box'
import PostDetailHeader from 'src/components/units/post_detail_header'

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    }
  }

  const mapPageUrl = defaultMapPageUrl(CONFIG.notion.rootDatabaseId)

  const pages = await getAllPagesInSpace(
    CONFIG.notion.rootDatabaseId,
    undefined,
    notion.getPage,
    {
      traverseCollections: false,
    },
  )

  const paths = Object.keys(pages)
    .map(pageId => mapPageUrl(pageId))
    .filter(path => path && path !== '/')

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async context => {
  const pageId = context.params.pageid as string
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

type PostDetailProps = {
  recordMap: ExtendedRecordMap
}

const PostDetailPage: NextPageWithLayout<PostDetailProps> = (props: PostDetailProps) => {
  const { selectedPost } = useCache()

  if (typeof window !== 'object') {
    return <></>
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
