import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import ChakraUISetting from 'src/common/libraries/chakraUI'
import TanStankSetting from 'src/common/libraries/tanStack'

type TAppRegisterProps = {
  children: ReactNode
}

export default function AppRegister({ children }: TAppRegisterProps) {
  return (
    <RecoilRoot>
      <TanStankSetting>
        <ChakraUISetting>{children}</ChakraUISetting>
      </TanStankSetting>
    </RecoilRoot>
  )
}
