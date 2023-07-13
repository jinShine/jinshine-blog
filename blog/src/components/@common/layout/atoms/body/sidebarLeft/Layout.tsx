import { GridItem } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function SidebarLeftLayout({ children }: { children: ReactNode }) {
  return (
    <GridItem
      display={{ base: 'none', md: 'block' }}
      rowSpan={1}
      colSpan={1}
      height={'full'}
      overflow={'auto'}
      pl={5}
      mr={5}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
      {children}
    </GridItem>
  )
}
