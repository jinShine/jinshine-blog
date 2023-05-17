import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import ChakraUISetting from 'src/common/libraries/chakraUI'
import { RecoilRoot } from 'recoil'
/** react-notion-x */
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <RecoilRoot>
      <ChakraUISetting>{getLayout(<Component {...pageProps} />)}</ChakraUISetting>
    </RecoilRoot>
  )
}

export default MyApp
