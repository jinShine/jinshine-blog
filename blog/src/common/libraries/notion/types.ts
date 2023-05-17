export type TNotionPost = {
  id: string
  url?: string | undefined
  properties: TProperties
}

export type TProperties = {
  title: string
  thumbnail?: string | undefined
  tags?: TTags[]
  description?: string
  category?: string
  createdAt: string
}

export type TTags = {
  id: string
  name: string
}
