import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { TNotionPost } from 'src/common/libraries/notion/types'
import { convertDateToString } from 'src/utils/convert_data_to_string'

type PostItemProps = {
  postData: TNotionPost
}

export default function PostItem(props: PostItemProps) {
  const item = props.postData

  return (
    <Box width={'100%'}>
      <Link href={`/${props.postData.id}`}>
        <a>
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
                    objectFit={'cover'}></Image>
                </AspectRatio>
                <Tag
                  position={'absolute'}
                  left={5}
                  top={3}
                  zIndex={2}
                  bgColor={'blue.400'}
                  color={'gray.50'}>
                  {item.properties.category}
                </Tag>
              </>
            ) : (
              <Box width={'full'}>
                <Tag mt={5} ml={4} bgColor={'blue.400'} color={'gray.50'}>
                  {item.properties.category}
                </Tag>
              </Box>
            )}

            <VStack width={'100%'} align={'flex-start'} p={'16px'}>
              {/* title */}
              <Text fontSize={22} fontWeight={'bold'}>
                {item.properties.title}
              </Text>

              {/* createAt */}
              <Text fontSize={14} fontWeight={'medium'} color={'gray.400'}>
                {convertDateToString(item.createdTime)}
              </Text>

              {/* description */}
              {item.properties.description && (
                <Text
                  fontSize={16}
                  fontWeight={'normal'}
                  color={useColorModeValue('gray.700', 'gray.200')}
                  pt={4}>
                  {item.properties.description}
                </Text>
              )}

              {/* tags */}
              <HStack pt={3}>
                {item.properties.tags?.map(tag => (
                  <Tag
                    key={tag.id}
                    bgColor={useColorModeValue('teal.100', 'teal.500')}
                    color={useColorModeValue('gray.500', 'gray.100')}>
                    {tag.name}
                  </Tag>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </a>
      </Link>
    </Box>
  )
}
