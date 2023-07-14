import { Spinner as CKSpinner, Center } from '@chakra-ui/react'

export default function Spinner() {
  return (
    <Center width={'full'} height={'50%'}>
      <CKSpinner
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.200"
        color="point.primary"
        size="lg"
      />
    </Center>
  )
}
