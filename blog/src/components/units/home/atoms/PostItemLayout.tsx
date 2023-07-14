import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function PostItemLayout({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <Box width={'full'} cursor={'pointer'} onClick={onClick}>
      {children}
    </Box>
  )
}
