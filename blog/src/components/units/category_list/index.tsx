import { Button, Divider, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCache } from 'src/common/hooks/useCache'

export default function CategoryList() {
  const router = useRouter()
  const { categories } = useCache()

  const onClickCategory = (category: string) => () => {
    router.push({
      query: { ...router.query, tag: category },
    })
  }

  return (
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
  )
}
