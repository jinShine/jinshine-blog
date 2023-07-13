import { Box, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Box bg={useColorModeValue('bg.light', 'bg.dark')} pb={10}>
      {children}
    </Box>
  )
}
