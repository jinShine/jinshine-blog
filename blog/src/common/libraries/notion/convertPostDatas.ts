import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { TNotionPost, TProperties } from './types'

export const convertPostDatas = (posts: QueryDatabaseResponse) => {
  return posts.results.map(post => {
    const properties: TProperties = {
      title: post.properties.title.title[0]?.text.content ?? '',
      thumbnail: post.properties.thumbnail.files[0]?.file.url ?? '',
      tags: post.properties.tags.multi_select.map(tag => ({
        id: tag.id,
        name: tag.name,
      })),
      description: post.properties.description.rich_text[0]?.text.content ?? '',
      category: post.properties.category.select?.name ?? '',
    }

    const postData: TNotionPost = {
      id: post.id,
      createdTime: post.created_time,
      lastEditedTime: post.last_edited_time,
      url: post.url,
      properties: properties,
    }

    return postData
  })
}
