import { CONFIG } from 'config'
import Head from 'next/head'
import { Helmet } from 'react-helmet-async'

export type MetadataProps = {
  title: string
  description: string
  type: 'Website' | string
  date?: string
  image?: string
  url: string
}

const Metadata: React.FC<MetadataProps> = ({ ...props }) => {
  const meta = { ...props }

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      {CONFIG.seo.keywords && (
        <meta name="keywords" content={CONFIG.seo.keywords.join(', ')} />
      )}
      <meta name="description" content={meta.description} />
      {/* og */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {meta.image && <meta property="og:image" content={meta.image} />}
      <>
        <meta property="article:published_time" content={meta.date} />
        <meta property="article:author" content={CONFIG.profile.nickname} />
      </>
    </Helmet>
  )
}

export default Metadata
