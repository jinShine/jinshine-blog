import { useCache } from 'src/common/hooks/useCache'
import { CategoryLayout } from '../atoms/CategoryLayout'
import { CategoryContent } from '../molecules/body/CategoryContent'

export type TCategory = {
  category: string
  length: number
}

export function CategoryList({ isMobile }: { isMobile: boolean }) {
  const { categories } = useCache()

  return (
    <CategoryLayout>
      <CategoryContent categories={categories} isMobile={isMobile} />
    </CategoryLayout>
  )
}
