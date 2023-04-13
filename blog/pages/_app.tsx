import type { AppProps } from 'next/app'
import ChakraUISetting from 'src/common/libraries/chakraUI'
import Layout from '../src/components/Layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraUISetting>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraUISetting>
  )
}

export default MyApp
