import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { CategoryButton } from '../../atoms/CategoryButton'
import { TCategory } from '../../organisms/CategoryList'

type TCategoryContentProps = {
  isMobile: boolean
  categories: TCategory[]
}

export function CategoryContent({ isMobile, categories }: TCategoryContentProps) {
  return (
    <>
      {isMobile ? (
        <Accordion
          allowToggle
          width={'full'}
          bg={useColorModeValue('bg.light', 'bg.dark')}>
          <AccordionItem>
            <AccordionButton>
              <Text fontSize={14} fontWeight={'bold'} flex={1} textAlign={'left'}>
                카테고리
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack width={'full'}>
                {categories.map((item, index) => (
                  <CategoryButton key={index} category={item} isMobile />
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <Text fontSize={17} fontWeight={'bold'}>
            카테고리
          </Text>
          <Divider />
          {categories.map((item, index) => (
            <CategoryButton key={index} category={item} />
          ))}
        </>
      )}
    </>
  )
}
