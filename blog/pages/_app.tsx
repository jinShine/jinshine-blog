import type { AppProps } from 'next/app'
import ChakraUISetting from 'src/common/libraries/chakraUI'
import Layout from '../src/components/Layouts/Layout'
/** react-notion-x */
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'

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
