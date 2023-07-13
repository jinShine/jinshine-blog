import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Flex, useColorMode } from '@chakra-ui/react'

export function HeaderRight() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex alignItems={'center'}>
      <Button onClick={toggleColorMode} size={'sm'}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  )
}
