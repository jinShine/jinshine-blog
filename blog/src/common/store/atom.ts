import { atom } from 'recoil'
import { TNotionPost } from '../libraries/notion/types'
import { recoilPersist } from 'recoil-persist'

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom: session } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
})

export const postsState = atom<TNotionPost[]>({
  key: 'postsState',
  default: [],
})

export const categoriesState = atom<{ category: string; length: number }[]>({
  key: 'categoriesState',
  default: [],
})

export const selectedPostState = atom<TNotionPost | null>({
  key: 'selectedPostState',
  default: null,
  effects: [session],
})
