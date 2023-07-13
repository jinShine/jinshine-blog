import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type TPageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: TPageLayoutProps) {
  return (
    <VStack width={'full'} spacing={10}>
      {children}
    </VStack>
  )
}
