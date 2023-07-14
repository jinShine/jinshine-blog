import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <VStack width={'full'} spacing={10}>
      {children}
    </VStack>
  )
}
