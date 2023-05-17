import { useColorMode } from '@chakra-ui/react'
import { CONFIG } from 'config'

type UtterancesProps = {
  issueTerm: string
}

const Utterances: React.FC<UtterancesProps> = (props: UtterancesProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const utterances_theme = colorMode === 'dark' ? 'github-dark' : 'github-light'

  return (
    <section
      ref={elem => {
        if (!elem) {
          return
        }
        const scriptElem = document.createElement('script')
        scriptElem.src = 'https://utteranc.es/client.js'
        scriptElem.async = true
        scriptElem.setAttribute('repo', 'jinShine/jinshine-blog')
        scriptElem.setAttribute('theme', utterances_theme)
        scriptElem.setAttribute('label', 'blog-comment')
        scriptElem.crossOrigin = 'anonymous'
        const config: { [key: string]: string } = CONFIG.utterances.config
        Object.keys(config).forEach(key => {
          scriptElem.setAttribute(key, config[key])
        })
        elem.replaceChildren(scriptElem)
      }}
    />
  )
}

export default Utterances
