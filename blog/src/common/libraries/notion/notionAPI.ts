import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { CONFIG } from 'config'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap, SearchParams, SearchResults } from 'notion-types'

const notion = new NotionAPI()

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)
  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params)
}

export async function getPosts(): Promise<QueryDatabaseResponse> {
  const notion = new Client({ auth: CONFIG.notion.token })
  const databaseId = CONFIG.notion.rootDatabaseId as string
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'publish',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'createdAt',
        direction: 'descending',
      },
    ],
  })

  return response
}
