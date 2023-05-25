import { Box, Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import CategoryList from '../units/category_list'
import ContactCard from '../units/contact_card'
import ProfileCard from '../units/profile_card'
import Header from './header'
import Metadata, { MetadataProps } from './meta'

type LayoutProps = {
  children: ReactNode
  metadata: MetadataProps
}

export default function Layout(props: LayoutProps) {
  const router = useRouter()

  const isHiddenProfile = router.asPath.includes('/posts')

  return (
    <Box bg={useColorModeValue('bg.light', 'bg.dark')} pb={10}>
      <Metadata {...props.metadata} />
      <Header />
      {isHiddenProfile ? (
        <Grid
          mx={'auto'}
          maxW={'1120px'}
          mt={10}
          mb={10}
          templateRows={'repeat(1, 1fr)'}
          templateColumns={'repeat(1, 1fr)'}>
          <GridItem
            rowSpan={1}
            colSpan={1}
            overflow={'auto'}
            ml={5}
            mr={5}
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}>
            {props.children}
          </GridItem>
        </Grid>
      ) : (
        <Grid
          mx={'auto'}
          maxW={'1120px'}
          h={'100vh'}
          mt={10}
          mb={10}
          templateRows={'repeat(1, 1fr)'}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}>
          <GridItem
            display={{ base: 'none', md: 'block' }}
            rowSpan={1}
            colSpan={1}
            height={'full'}
            overflow={'auto'}
            pl={5}
            mr={5}
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}>
            <VStack spacing={5}>
              <ProfileCard isMobile={false} />
              <ContactCard />
              <CategoryList isMobile={false} />
            </VStack>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            overflow={'auto'}
            mx={5}
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}>
            <VStack spacing={3} mb={10} display={{ base: 'block', md: 'none ' }}>
              <ProfileCard isMobile={true} />
              <CategoryList isMobile={true} />
            </VStack>
            {props.children}
          </GridItem>
        </Grid>
      )}
      {/* <Footer /> */}
    </Box>
  )
}
