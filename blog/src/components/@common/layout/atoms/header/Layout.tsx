import { Box, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      bg={useColorModeValue('point.light', 'point.dark')}
      px={4}
      position={'sticky'}
      top={0}
      height={'60px'}
      width={'100%'}
      zIndex={1}>
      {children}
    </Box>
  )
}
