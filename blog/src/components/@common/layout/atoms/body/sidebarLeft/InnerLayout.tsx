import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function SidebarLeftInnerLayout({ children }: { children: ReactNode }) {
  return <VStack spacing={5}>{children}</VStack>
}
