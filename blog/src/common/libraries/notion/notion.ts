import { Client } from '@notionhq/client'
import { CONFIG } from 'config'
import { NotionCompatAPI } from 'notion-compat'
import { ExtendedRecordMap, SearchParams, SearchResults } from 'notion-types'

const notion = new NotionCompatAPI(new Client({ auth: CONFIG.notion.token }))

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)
  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params)
}
