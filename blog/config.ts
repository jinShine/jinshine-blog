// configs
export const CONFIG = {
  notion: {
    rootDatabaseId: process.env.NOTION_DATABASE_ID ?? '',
    token: process.env.NOTION_TOKEN ?? '',
  },
}

// ENV 환경
export const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

// URL 환경
export const port = process.env.PORT || 3000
export const rootDomain = isDev ? `localhost:${port}` : null
