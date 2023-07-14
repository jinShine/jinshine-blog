import { AspectRatio, Box, Image, Tag } from '@chakra-ui/react'
import { TNotionPost } from 'src/common/libraries/notion/types'

type TProps = {
  post: TNotionPost
}

export function PostThumbnail({ post }: TProps) {
  const item = post.properties

  return (
    <>
      {item.thumbnail ? (
        <>
          <AspectRatio width={'101%'} ratio={2 / 1}>
            <Image src={item.thumbnail} alt="post thumbnail" objectFit={'cover'} />
          </AspectRatio>
          <Tag
            position={'absolute'}
            left={5}
            top={3}
            zIndex={2}
            bgColor={'blue.400'}
            color={'gray.50'}
            size={{ base: 'sm', md: 'md' }}
            fontSize={{ base: 10, md: 12 }}
            fontWeight={700}>
            {item.category}
          </Tag>
        </>
      ) : (
        <Box width={'full'}>
          <Tag
            mt={5}
            ml={4}
            bgColor={'blue.400'}
            color={'gray.50'}
            size={{ base: 'sm', md: 'md' }}
            fontSize={{ base: 10, md: 12 }}
            fontWeight={700}>
            {item.category}
          </Tag>
        </Box>
      )}
    </>
  )
}
