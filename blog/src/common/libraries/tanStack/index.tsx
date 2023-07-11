import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

type TTanStankSettingProps = {
  children: ReactNode
}

export const client = new QueryClient()

export default function TanStankSetting({ children }: TTanStankSettingProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
