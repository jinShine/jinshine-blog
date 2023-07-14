import { NextApiRequest, NextApiResponse } from 'next'
import { convertPostDatas } from 'src/common/libraries/notion/convertPostDatas'
import { filteredPosts } from 'src/common/libraries/notion/filteredPosts'
import { getCategories } from 'src/common/libraries/notion/getCategories'
import { getPosts } from 'src/common/libraries/notion/notionAPI'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req

  try {
    const response = await getPosts()
    const convertPosts = convertPostDatas(response)
    const categories = getCategories(convertPosts)
    const posts = filteredPosts(convertPosts, query.category)

    return res.status(200).json({
      posts,
      categories,
    })
  } catch (error) {
    console.error(error)
    return res
      .status(499)
      .send({ message: 'notion api에 대한 데이터를 가져오지 못했습니다.' })
  }
}
