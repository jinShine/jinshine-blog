export type TNotionPost = {
  id: string
  createdTime: string
  lastEditedTime?: string
  url?: string | undefined
  properties: TProperties
}

export type TProperties = {
  title: string
  thumbnail?: string | undefined
  tags?: TTags[]
  description?: string
  category?: string
}

export type TTags = {
  id: string
  name: string
}
