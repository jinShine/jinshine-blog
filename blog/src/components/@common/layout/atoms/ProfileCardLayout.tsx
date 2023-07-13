import { Box, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function ProfileCardLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      width={'full'}
      borderRadius={'xl'}
      boxShadow={'sm'}
      overflow={'hidden'}
      bg={useColorModeValue('point.light', 'point.dark')}>
      {children}
    </Box>
  )
}
