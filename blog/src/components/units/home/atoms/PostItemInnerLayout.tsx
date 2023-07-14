import { VStack, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function PostItemInnerLayout({ children }: { children: ReactNode }) {
  return (
    <VStack
      borderRadius={'xl'}
      boxShadow={'sm'}
      overflow={'hidden'}
      bg={useColorModeValue('point.light', 'point.dark')}
      position={'relative'}>
      {children}
    </VStack>
  )
}
