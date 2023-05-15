import { Box, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { CONFIG } from 'config'

export default function ProfileCard() {
  return (
    <Box
      width={'full'}
      borderRadius={'xl'}
      boxShadow={'sm'}
      overflow={'hidden'}
      bg={useColorModeValue('point.light', 'point.dark')}>
      <VStack p={'20px'}>
        <Image src={CONFIG.profile.image} borderRadius={'full'} p={5} />
        <Text fontSize={22} fontWeight={'bold'}>
          {CONFIG.profile.nickname}
        </Text>
        <Text fontSize={14} fontWeight={500} color={'#6B7280'}>
          {CONFIG.profile.role}
        </Text>
        <Text fontSize={14} fontWeight={600} pt={5}>
          {CONFIG.profile.description}
        </Text>
      </VStack>
    </Box>
  )
}
