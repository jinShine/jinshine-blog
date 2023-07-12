import { Spinner, Text, VStack } from '@chakra-ui/react'

export default function PageSpinner() {
  return (
    <VStack
      position={'absolute'}
      top={0}
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
      w={'100vw'}
      h={'100vh'}
      justify={'center'}
      align={'center'}
      gap={5}>
      <Spinner
        thickness="3px"
        speed="0.65s"
        emptyColor="gray.200"
        color="point.primary"
        size="lg"
      />
      <Text fontSize={'16px'} color={'font.black'}>
        데이터를 불러오는 중입니다.
      </Text>
    </VStack>
  )
}
