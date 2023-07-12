import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
/** react-notion-x */
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'
import { usePageLoading } from 'src/common/hooks/useLoading'
import AppRegister from 'src/components/AppRegister'
import PageSpinner from 'src/components/@common/spinner/PageSpinner'

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)
  const [isDomLoaded, setIsDomLoaded] = useState(false)
  const { isLoading } = usePageLoading()

  useEffect(() => {
    setIsDomLoaded(true)
  }, [])

  return (
    <>
      {isDomLoaded && (
        <AppRegister>
          {isLoading ? <PageSpinner /> : getLayout(<Component {...pageProps} />)}
        </AppRegister>
      )}
    </>
  )
}

export default MyApp
