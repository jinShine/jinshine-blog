import { CONFIG } from 'config'
import { NextPageWithLayout } from 'pages/_app'
import Layout from 'src/components/@common/layout'
import Spinner from 'src/components/@common/spinner/Spinner'
import { ErrorText } from 'src/components/@common/symbolText/ErrorText'
import { Home } from 'src/components/units/home'
import { useHomePage } from 'src/components/units/home/@hooks/useHomePage'

const HomePage: NextPageWithLayout = () => {
  const { posts, error, loading, onClick } = useHomePage()

  if (loading) return <Spinner />
  if (error) return <ErrorText />

  return (
    <Home.Layout>
      <Home.PostList posts={posts} onClick={onClick} />
    </Home.Layout>
  )
}

HomePage.getLayout = function getlayout(page) {
  return (
    <Layout
      metadata={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'Website',
        image: CONFIG.profile.image,
        url: CONFIG.link,
      }}>
      {page}
    </Layout>
  )
}

export default HomePage
