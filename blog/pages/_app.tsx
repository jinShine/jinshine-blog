import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import ChakraUISetting from 'src/common/libraries/chakraUI'
import { RecoilRoot } from 'recoil'
import { HelmetProvider } from 'react-helmet-async'
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

  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <RecoilRoot>
          <HelmetProvider>
            <ChakraUISetting>{getLayout(<Component {...pageProps} />)}</ChakraUISetting>
          </HelmetProvider>
        </RecoilRoot>
      )}
    </>
  )
}

export default MyApp
