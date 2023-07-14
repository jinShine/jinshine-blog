import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function PostItemContentLayout({ children }: { children: ReactNode }) {
  return (
    <VStack width={'100%'} align={'flex-start'} p={'16px'}>
      {children}
    </VStack>
  )
}
