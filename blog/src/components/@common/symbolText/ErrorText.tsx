import { Center, Text } from '@chakra-ui/react'

export function ErrorText() {
  return (
    <Center width={'full'} height={'50%'}>
      <Text color="font.gray">
        {'일시적으로 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'}
      </Text>
    </Center>
  )
}
