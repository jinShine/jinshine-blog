import { useRedirect } from 'src/common/hooks/useRedirect'

const IndexPage = () => {
  useRedirect('home')
  return null
}

export default IndexPage
