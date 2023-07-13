import { ReactNode } from 'react'
import Metadata, { MetadataProps } from '../meta'
import { AppLayout } from './atoms/AppLayout'
import Body from './templates/Body'
import Header from './templates/Header'

type LayoutProps = {
  children: ReactNode
  metadata: MetadataProps
}

export default function Layout({ children, metadata }: LayoutProps) {
  return (
    <AppLayout>
      <Metadata {...metadata} />
      <Header />
      <Body>{children}</Body>
    </AppLayout>
  )
}
