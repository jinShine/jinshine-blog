import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <VStack width={'full'} align={'flex-start'} pt={5} pl={1}>
      {children}
    </VStack>
  )
}
