import { Box } from '@chakra-ui/react'
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'

type ProjectItemProps = {
  blogData: PageObjectResponse | PartialPageObjectResponse
}

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <Box>
      <Image
        src={props.blogData.cover.external.url}
        alt="커버이미지"
        width={100}
        height={100}
        objectFit="none"
        quality={100}
      />
      <h1>{props.blogData.properties.title.title[0]?.plain_text}</h1>
    </Box>
  )
}
