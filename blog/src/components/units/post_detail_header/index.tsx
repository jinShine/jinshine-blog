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
import { CONFIG } from 'config'
import { TNotionPost } from 'src/common/libraries/notion/types'
import { convertDateFormat } from 'src/utils/convert_data_to_string'

type PostDetailHeaderProps = {
  postData: TNotionPost
}

export default function PostDetailHeader(props: PostDetailHeaderProps) {
  const item = props.postData

  return (
    <Box width={'full'} py={10} px={{ base: 4, sm: '20px', md: '44px', lg: '68px' }}>
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
      <VStack width={'100%'} align={'flex-start'} p={'16px'}>
        {/* title */}
        <Text fontSize={{ base: 26, md: 32 }} fontWeight={'black'}>
          {item?.properties.title}
        </Text>
        {/* createAt */}
        <HStack spacing={3}>
          <HStack>
            <Image
              src={CONFIG.profile.image}
              borderRadius={'full'}
              width={{ base: '20px', md: '24px' }}
              height={{ base: '20px', md: '24px' }}
            />
            <Text
              fontSize={{ base: 13, md: 16 }}
              fontWeight={'medium'}
              color={useColorModeValue('gray.500', 'gray.400')}>
              {CONFIG.profile.nickname}
            </Text>
          </HStack>
          <Text
            fontSize={{ base: 13, md: 16 }}
            color={useColorModeValue('gray.500', 'gray.400')}>
            {'|'}
          </Text>
          <Text
            fontSize={{ base: 13, md: 16 }}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            {convertDateFormat(item?.properties.createdAt ?? '')}
          </Text>
        </HStack>
        {/* tags */}
        <HStack pt={3}>
          {item?.properties.tags?.map(tag => (
            <Tag
              key={tag.id}
              size={'sm'}
              fontSize={{ base: 10, md: 12 }}
              bgColor={useColorModeValue('teal.100', 'teal.500')}
              color={useColorModeValue('gray.500', 'gray.100')}>
              {tag.name}
            </Tag>
          ))}
        </HStack>
        {item?.properties.thumbnail && (
          <AspectRatio width={'100%'} ratio={2 / 1}>
            <Image
              src={item.properties.thumbnail}
              alt="post thumbnail"
              objectFit={'cover'}
              borderRadius={'2xl'}
              mt={5}
            />
          </AspectRatio>
        )}
      </VStack>
    </Box>
  )
}
