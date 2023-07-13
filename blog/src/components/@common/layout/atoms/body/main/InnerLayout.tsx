import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function MainInnerLayout({ children }: { children: ReactNode }) {
  return (
    <VStack spacing={3} mb={10} display={{ base: 'block', md: 'none ' }}>
      {children}
    </VStack>
  )
}
