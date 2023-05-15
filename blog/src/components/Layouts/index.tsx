import { Box, Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'
import ContactCard from '../units/contact_card'
import ProfileCard from '../units/profile_card'
import Footer from './footer'
import Header from './header'
import Metadata, { MetadataProps } from './meta'

type LayoutProps = {
  children: ReactNode
  metadata: MetadataProps
}

export default function Layout(props: LayoutProps) {
  return (
    <Box bg={useColorModeValue('bg.light', 'bg.dark')}>
      <Metadata {...props.metadata} />
      <Header />
      <Grid
        mx={'auto'}
        maxW={'1120px'}
        h={'100vh'}
        mt={5}
        templateRows={'repeat(1, 1fr)'}
        templateColumns={'repeat(3, 1fr)'}>
        <GridItem
          rowSpan={1}
          colSpan={1}
          height={'full'}
          overflow={'scroll'}
          pl={5}
          mr={10}
          __css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
          <VStack spacing={5}>
            <ProfileCard />
            <ContactCard />
          </VStack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bgColor={'blue'}>
          {props.children}
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  )
}
