import { Text, useColorModeValue } from '@chakra-ui/react'

export function PostItemDescription({ desc }: { desc: string | undefined }) {
  return (
    <Text
      fontSize={{ base: 12, md: 16 }}
      fontWeight={'normal'}
      color={useColorModeValue('gray.700', 'gray.200')}
      pt={2}>
      {desc}
    </Text>
  )
}
