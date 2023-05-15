import { CONFIG, isDev, rootDomain } from 'config'
import { ExtendedRecordMap } from 'notion-types'
import { getAllPagesInSpace } from 'notion-utils'
import { defaultMapPageUrl } from 'react-notion-x'
import * as notion from 'src/common/libraries/notion/notion'
import { NotionPage } from 'src/components/NotionPage'

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

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain ?? ''}
      rootPageId={CONFIG.notion.rootDatabaseId}
    />
  )
}
