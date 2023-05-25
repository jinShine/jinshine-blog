import {
  AspectRatio,
  Box,
  Image,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCache } from 'src/common/hooks/useCache'
import { TNotionPost } from 'src/common/libraries/notion/types'
import { convertDateFormat } from 'src/utils/convert_data_to_string'

type PostItemProps = {
  postData: TNotionPost
}

export default function PostItem(props: PostItemProps) {
  const router = useRouter()
  const { setSelectedPost } = useCache()
  const item = props.postData

  const onClickItem = () => {
    setSelectedPost(item)
    router.push(`posts/${props.postData.id}`)
  }

  return (
    <Box width={'100%'} cursor={'pointer'} onClick={onClickItem}>
      <VStack
        borderRadius={'xl'}
        boxShadow={'sm'}
        overflow={'hidden'}
        bg={useColorModeValue('point.light', 'point.dark')}
        position={'relative'}>
        {item.properties.thumbnail ? (
          <>
            <AspectRatio width={'101%'} ratio={2 / 1}>
              <Image
                src={item.properties.thumbnail}
                alt="post thumbnail"
                objectFit={'cover'}
              />
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
              {item.properties.category}
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
              {item.properties.category}
            </Tag>
          </Box>
        )}
        <VStack width={'100%'} align={'flex-start'} p={'16px'}>
          {/* title */}
          <Text fontSize={{ base: 16, md: 22 }} fontWeight={'bold'}>
            {item.properties.title}
          </Text>

          {/* createAt */}
          <Text fontSize={{ base: 12, md: 16 }} fontWeight={'medium'} color={'gray.400'}>
            {convertDateFormat(item?.properties.createdAt)}
          </Text>

          {/* description */}
          {item.properties.description && (
            <Text
              fontSize={{ base: 12, md: 16 }}
              fontWeight={'normal'}
              color={useColorModeValue('gray.700', 'gray.200')}
              pt={2}>
              {item.properties.description}
            </Text>
          )}

          {/* tags */}
          <Box width={'100%'} overflowX={'scroll'}>
            {item.properties.tags?.map(tag => (
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
        </VStack>
      </VStack>
    </Box>
  )
}
