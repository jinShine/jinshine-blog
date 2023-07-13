import { GridItem } from '@chakra-ui/react'
import { ReactNode } from 'react'

type TMainLayoutProps = {
  children: ReactNode
  isSidebarLeftHidden: boolean
}

export function MainLayout({ children, isSidebarLeftHidden }: TMainLayoutProps) {
  return (
    <>
      {isSidebarLeftHidden ? (
        <GridItem
          rowSpan={1}
          colSpan={1}
          overflow={'auto'}
          ml={5}
          mr={5}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
          {children}
        </GridItem>
      ) : (
        <GridItem
          rowSpan={1}
          colSpan={2}
          overflow={'inherit'}
          mx={5}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
          {children}
        </GridItem>
      )}
    </>
  )
}
