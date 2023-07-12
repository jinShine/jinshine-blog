'use client'

import { globalTheme } from '@/styles/globalTheme'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ChakraUIProps = {
  children: ReactNode
}

export default function ChakraUISetting({ children }: ChakraUIProps) {
  return (
    <ChakraProvider resetCSS theme={globalTheme}>
      {children}
    </ChakraProvider>
  )
}
