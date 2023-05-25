// ENV 환경
export const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

// URL 환경
export const port = process.env.PORT || 3000
export const rootDomain = isDev ? `localhost:${port}` : null

// configs
export const CONFIG = {
  blog: {
    title: 'jinShine 블로그',
    description: '기억하고 싶은 것을 정리하려 합니다.',
  },
  profile: {
    image: '/images/Profile.jpg',
    nickname: 'jinShine',
    role: 'frontend developer',
    description: '去去去中知 行行行裏覺',
    email: 'seungjin429@gmail.com',
    github: 'jinShine',
    linkedin: '',
    instagram: '',
  },
  notion: {
    rootDatabaseId: process.env.NOTION_DATABASE_ID ?? '',
    token: process.env.NOTION_TOKEN ?? '',
  },
  utterances: {
    enable: true,
    config: {
      repo: 'jinShine/jinshine-blog',
      'issue-term': 'pathname',
      label: '💬 Utterances',
    },
  },
  lang: 'ko-KR',
  seo: { keywords: ['Blog', 'Website', 'Notion'] },
  link: 'https://jinshine-blog.vercel.app',
}
