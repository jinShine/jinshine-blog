import { Box, Tag, useColorModeValue } from '@chakra-ui/react'
import { TTags } from 'src/common/libraries/notion/types'

export function PostItemTags({ tags }: { tags: TTags[] | undefined }) {
  return (
    <Box width={'100%'} overflowX={'scroll'}>
      {tags?.map(tag => (
        <Tag
          key={tag.id}
          size={'sm'}
          fontSize={{ base: 10, md: 12 }}
          mr={1}
          mt={1}
          bgColor={useColorModeValue('teal.100', 'teal.500')}
          color={useColorModeValue('gray.500', 'gray.100')}>
          {tag.name}
        </Tag>
      ))}
    </Box>
  )
}
