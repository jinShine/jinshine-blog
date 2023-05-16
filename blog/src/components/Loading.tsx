import { Center, Spinner } from '@chakra-ui/react'
import * as React from 'react'

export const Loading: React.FC = () => (
  <Center w={'full'} h={'full'}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
)
