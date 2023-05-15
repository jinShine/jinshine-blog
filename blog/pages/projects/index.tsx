import { Box } from '@chakra-ui/react'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { getPosts } from 'src/common/libraries/notion/notion'
import ProjectItem from 'src/components/projects/ProjectItem'

type ProjectsProps = {
  posts: QueryDatabaseResponse
}

export default function Projects(props: ProjectsProps) {
  console.log(props.posts)
  return (
    <>
      <Box>총 프로젝트 : {props.posts.results.length}</Box>
      {props.posts.results.map(blog => (
        <ProjectItem key={blog.id} blogData={blog} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  console.log('# blog 데이터', posts.results)

  return {
    props: { posts },
  }
}
