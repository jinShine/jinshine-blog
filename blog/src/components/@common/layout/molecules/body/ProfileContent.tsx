import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { CONFIG } from 'config'

export function ProfileContent({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <HStack spacing={2} h={'130px'}>
          <Image
            src={CONFIG.profile.image}
            borderRadius={'full'}
            w={'80px'}
            h={'80px'}
            mx={5}
          />
          <VStack align={'flex-start'} spacing={0}>
            <Text fontSize={16} fontWeight={'bold'}>
              {CONFIG.profile.nickname}
            </Text>
            <Text fontSize={13} fontWeight={400} color={'#6B7280'}>
              {CONFIG.profile.role}
            </Text>
            <Text fontSize={13} fontWeight={600} pt={3}>
              {CONFIG.profile.description}
            </Text>
          </VStack>
        </HStack>
      ) : (
        <VStack p={'20px'}>
          <Image src={CONFIG.profile.image} borderRadius={'full'} p={5} />
          <Text fontSize={22} fontWeight={'bold'}>
            {CONFIG.profile.nickname}
          </Text>
          <Text fontSize={16} fontWeight={500} color={'#6B7280'}>
            {CONFIG.profile.role}
          </Text>
          <Text fontSize={16} fontWeight={600} pt={5} pb={5}>
            {CONFIG.profile.description}
          </Text>
        </VStack>
      )}
    </>
  )
}
