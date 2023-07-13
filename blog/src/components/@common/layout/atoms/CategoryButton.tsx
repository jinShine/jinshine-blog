import { Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TCategory } from '../organisms/CategoryList'

type TCategoryButtonProps = {
  isMobile?: boolean
  category: TCategory
}

export function CategoryButton({ isMobile = false, category }: TCategoryButtonProps) {
  const router = useRouter()
  const onClickCategory = (category: string) => () => {
    router.push({
      query: { ...router.query, category },
    })
  }

  return (
    <Button
      variant={'ghost'}
      size={isMobile ? 'sm' : 'md'}
      fontSize={isMobile ? 12 : 16}
      fontWeight={'normal'}
      onClick={onClickCategory(category.category)}>
      {`${category.category}`}
      <Text fontSize={14} color={'gray.500'}>
        &nbsp;{`(${category.length})`}
      </Text>
    </Button>
  )
}
