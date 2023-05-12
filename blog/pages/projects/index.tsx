import { Box } from '@chakra-ui/react'
import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { CONFIG } from 'config'
import ProjectItem from 'src/components/projects/ProjectItem'

type ProjectsProps = {
  blogDatas: QueryDatabaseResponse
}

const notion = new Client({ auth: CONFIG.notion.token })

export default function Projects(props: ProjectsProps) {
  console.log(props.blogDatas)
  return (
    <>
      <Box>총 프로젝트 : {props.blogDatas.results.length}</Box>
      {props.blogDatas.results.map(blog => (
        <ProjectItem key={blog.id} blogData={blog} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const fetchBlogs = async () => {
    const databaseId = CONFIG.notion.rootDatabaseId as string
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [],
      },
      sorts: [
        {
          property: 'createdAt',
          direction: 'ascending',
        },
      ],
    })

    return response
  }
  const blogDatas = await fetchBlogs()
  console.log('## blogDatas', blogDatas.results)

  return {
    props: { blogDatas },
  }
}
