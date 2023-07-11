import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import ChakraUISetting from 'src/common/libraries/chakraUI'
import TanStankSetting from 'src/common/libraries/tanStack'

type TAppRegisterProps = {
  children: ReactNode
}

export function AppRegister({ children }: TAppRegisterProps) {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <TanStankSetting>
          <ChakraUISetting>{children}</ChakraUISetting>
        </TanStankSetting>
      </HelmetProvider>
    </RecoilRoot>
  )
}
