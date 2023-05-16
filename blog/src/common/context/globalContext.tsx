import { ReactNode, createContext, useEffect, useState } from 'react'
import { TNotionPost } from '../libraries/notion/types'

type GlobalDatas = {
  post: TNotionPost | null
}

type GlobalProviderProps = {
  children: ReactNode
}

export type GlobalContextValue = {
  datas: GlobalDatas | null
  saveDatas: (datas: GlobalDatas) => void
}

export const GlobalContext = createContext<GlobalContextValue>({
  datas: null,
  saveDatas: () => null,
})

export const GlobalProvider = (props: GlobalProviderProps) => {
  const [datas, setDatas] = useState<GlobalDatas>({ post: null })

  useEffect(() => {
    const restoredDatas = restoreGlobalDatas()

    if (restoredDatas) {
      setDatas({ ...restoredDatas })
    }
  }, [])

  const saveDatas = (datas: GlobalDatas) => {
    saveGlobalDatas(datas)
    setDatas(datas)
  }

  return (
    <GlobalContext.Provider value={{ datas, saveDatas }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

const restoreGlobalDatas = (): GlobalDatas | null => {
  let datas = null

  try {
    const globalDatas = window.localStorage.getItem('global_datas')

    if (globalDatas) {
      datas = { ...JSON.parse(globalDatas) }
    } else {
      datas = null
    }
  } catch (error) {
    console.error(error)
  }

  return datas
}

const saveGlobalDatas = (datas: GlobalDatas) => {
  window.localStorage.setItem('global_datas', JSON.stringify(datas))
}
