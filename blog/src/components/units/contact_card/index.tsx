import { Box, HStack, Text, VStack, chakra, useColorModeValue } from '@chakra-ui/react'
import { CONFIG } from 'config'
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai'

const GithubIcon = chakra(AiOutlineGithub)
const EmailIcon = chakra(AiOutlineMail)
const LinkedInIcon = chakra(AiFillLinkedin)
const InstagramIcon = chakra(AiOutlineInstagram)

export default function ContactCard() {
  return (
    <Box
      width={'full'}
      borderRadius={'xl'}
      boxShadow={'sm'}
      overflow={'hidden'}
      bg={useColorModeValue('point.light', 'point.dark')}>
      <VStack p={'20px'} align={'flex-start'}>
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            target="_blank"
            rel="noreferrer">
            <HStack spacing={3}>
              <GithubIcon fontSize={'xl'} />
              <Text fontSize={'md'}>Github</Text>
            </HStack>
          </a>
        )}
        {CONFIG.profile.email && (
          <a href={`mailto:${CONFIG.profile.email}`} target="_blank" rel="noreferrer">
            <HStack spacing={3}>
              <EmailIcon fontSize={'xl'} />
              <Text fontSize={'md'}>Email</Text>
            </HStack>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            target="_blank"
            rel="noreferrer">
            <HStack spacing={3}>
              <LinkedInIcon fontSize={'xl'} />
              <Text fontSize={'md'}>linkedin</Text>
            </HStack>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            target="_blank"
            rel="noreferrer">
            <HStack spacing={3}>
              <InstagramIcon fontSize={'xl'} />
              <Text fontSize={'md'}>instagram</Text>
            </HStack>
          </a>
        )}
      </VStack>
    </Box>
  )
}
