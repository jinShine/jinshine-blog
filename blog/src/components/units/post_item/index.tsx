import { AspectRatio, Box, Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { TNotionPost } from 'src/common/libraries/notion/types'

type PostItemProps = {
  postData: TNotionPost
}

export default function PostItem(props: PostItemProps) {
  // console.log('######', props.postData)
  const item = props.postData

  return (
    <Link href={`/${props.postData.id}`}>
      <a>
        <Box
          width={'full'}
          borderRadius={'xl'}
          boxShadow={'sm'}
          overflow={'hidden'}
          bg={useColorModeValue('point.light', 'point.dark')}>
          {props.postData.id}
          {item.properties.thumbnail && (
            <AspectRatio width={'100%'} ratio={16 / 9}>
              <Image
                src={item.properties.thumbnail}
                alt="Post thumbnail"
                objectFit={'cover'}
              />
            </AspectRatio>
          )}
        </Box>
      </a>
    </Link>
  )
}
