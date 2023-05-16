import { extendTheme } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  colors: {
    bg: {
      light: '#f1f5f9',
      dark: 'gray.300',
    },
    point: {
      light: 'white',
      dark: '#2D3748',
      primary: '#8F43EE',
      secondary: '#F0EB8D',
    },
    font: {
      black: 'gray.900',
      white: 'gray.50',
      gray: 'gray.500',
    },
  },
})
