import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue('point.light', 'point.dark')}
      px={4}
      position={'sticky'}
      top={0}
      height={'70px'}
      width={'100%'}
      zIndex={999}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Button variant={'ghost'} onClick={() => router.push('/')}>
          Logo
        </Button>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {/* <Menu>
            <MenuButton onClick={() => router.push('/')}>홈</MenuButton>
          </Menu> */}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
