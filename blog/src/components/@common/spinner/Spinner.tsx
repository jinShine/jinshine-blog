import { Spinner as CKSpinner } from '@chakra-ui/react'

export default function Spinner() {
  return (
    <CKSpinner
      thickness="3px"
      speed="0.65s"
      emptyColor="gray.200"
      color="point.primary"
      size="lg"
    />
  )
}
