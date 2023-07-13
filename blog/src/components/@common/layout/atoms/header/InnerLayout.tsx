import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function HeaderInnerLayout({ children }: { children: ReactNode }) {
  return (
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      {children}
    </Flex>
  )
}
