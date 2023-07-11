import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
/** react-notion-x */
import { QueryClient } from '@tanstack/react-query'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'
import { AppRegister } from 'src/components/AppRegister'

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
      {domLoaded && <AppRegister>{getLayout(<Component {...pageProps} />)}</AppRegister>}
    </>
  )
}

export default MyApp
