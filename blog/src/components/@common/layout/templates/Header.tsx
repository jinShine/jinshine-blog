import { HeaderInnerLayout } from '../atoms/header/InnerLayout'
import { HeaderLayout } from '../atoms/header/Layout'
import { HeaderLeft } from '../molecules/header/HeaderLeft'
import { HeaderRight } from '../molecules/header/HeaderRight'

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderInnerLayout>
        <HeaderLeft />
        <HeaderRight />
      </HeaderInnerLayout>
    </HeaderLayout>
  )
}
