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
import { convertDateToString } from 'src/utils/convert_data_to_string'

type PostDetailHeaderProps = {
  postData: TNotionPost | null | undefined
}

export default function PostDetailHeader(props: PostDetailHeaderProps) {
  const item = props.postData

  return (
    <Box width={'full'} py={10} px={{ base: 4, sm: '20px', md: '44px', lg: '68px' }}>
      <Tag mt={5} ml={4} bgColor={'blue.400'} color={'gray.50'}>
        {item?.properties.category}
      </Tag>
      <VStack width={'100%'} align={'flex-start'} p={'16px'}>
        {/* title */}
        <Text fontSize={32} fontWeight={'black'}>
          {item?.properties.title}
        </Text>
        {/* createAt */}
        <HStack spacing={3}>
          <HStack>
            <Image
              src={CONFIG.profile.image}
              borderRadius={'full'}
              width={'24px'}
              height={'24px'}
            />
            <Text
              fontSize={16}
              fontWeight={'medium'}
              color={useColorModeValue('gray.500', 'gray.400')}>
              {CONFIG.profile.nickname}
            </Text>
          </HStack>
          <Text fontSize={16} color={useColorModeValue('gray.500', 'gray.400')}>
            {'|'}
          </Text>
          <Text
            fontSize={16}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            {convertDateToString(item?.createdTime ?? '')}
          </Text>
        </HStack>
        {/* tags */}
        <HStack pt={3}>
          {item?.properties.tags?.map(tag => (
            <Tag
              key={tag.id}
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
