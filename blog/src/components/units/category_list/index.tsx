import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Divider,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCache } from 'src/common/hooks/useCache'

type CategoryListProps = {
  isMobile: boolean
}

export default function CategoryList(props: CategoryListProps) {
  const router = useRouter()
  const { categories } = useCache()

  const onClickCategory = (category: string) => () => {
    router.push({
      query: { ...router.query, category },
    })
  }

  return (
    <>
      {props.isMobile ? (
        <VStack width={'full'} align={'flex-start'} pt={5} pl={1}>
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
                    <Button
                      key={index}
                      variant={'ghost'}
                      size={'sm'}
                      fontSize={12}
                      fontWeight={'normal'}
                      onClick={onClickCategory(item.category)}>
                      {`${item.category}`}
                      <Text fontSize={14} color={'gray.500'}>
                        &nbsp;{`(${item.length})`}
                      </Text>
                    </Button>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      ) : (
        <VStack width={'full'} align={'flex-start'} pt={5} pl={3}>
          <Text fontSize={17} fontWeight={'bold'}>
            카테고리
          </Text>
          <Divider />
          {categories.map((item, index) => (
            <Button
              key={index}
              variant={'ghost'}
              fontSize={16}
              fontWeight={'normal'}
              onClick={onClickCategory(item.category)}>
              {`${item.category}`}
              <Text fontSize={14} color={'gray.500'}>
                &nbsp;{`(${item.length})`}
              </Text>
            </Button>
          ))}
        </VStack>
      )}
    </>
  )
}
