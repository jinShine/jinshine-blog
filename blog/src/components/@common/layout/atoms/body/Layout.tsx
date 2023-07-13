import { Grid } from '@chakra-ui/react'
import { ReactNode } from 'react'

const LAYOUT_MAX_WIDTH = '1120px'

type TBodyLayoutProps = {
  children: ReactNode
  isSidebarLeftHidden: boolean
}

export function BodyLayout({ children, isSidebarLeftHidden }: TBodyLayoutProps) {
  return (
    <Grid
      mx={'auto'}
      maxW={LAYOUT_MAX_WIDTH}
      mt={10}
      mb={10}
      templateRows={'repeat(1, 1fr)'}
      templateColumns={
        isSidebarLeftHidden
          ? 'repeat(1, 1fr)'
          : { base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }
      }>
      {children}
    </Grid>
  )
}
