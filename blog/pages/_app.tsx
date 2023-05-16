import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import ChakraUISetting from 'src/common/libraries/chakraUI'
/** react-notion-x */
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'
import { GlobalProvider } from 'src/common/context/globalContext'

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <GlobalProvider>
      <ChakraUISetting>{getLayout(<Component {...pageProps} />)}</ChakraUISetting>
    </GlobalProvider>
  )
}

export default MyApp
