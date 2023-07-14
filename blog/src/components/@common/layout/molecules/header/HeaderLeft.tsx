import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function HeaderLeft() {
  const router = useRouter()

  const onClickHome = () => {
    router.push('/')
  }

  return (
    <Button variant={'ghost'} fontWeight={800} onClick={onClickHome}>
      jinShine 블로그
    </Button>
  )
}
