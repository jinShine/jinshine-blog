import { Text } from '@chakra-ui/react'
import React from 'react'

export function PostItemTitle({ title }: { title: string }) {
  return (
    <Text fontSize={{ base: 16, md: 22 }} fontWeight={'bold'}>
      {title}
    </Text>
  )
}
