import { Text } from '@chakra-ui/react'
import { convertDateFormat } from 'src/utils/convert_data_to_string'

export function PostItemDate({ createAt }: { createAt: string }) {
  return (
    <Text fontSize={{ base: 12, md: 16 }} fontWeight={'medium'} color={'gray.400'}>
      {convertDateFormat(createAt)}
    </Text>
  )
}
