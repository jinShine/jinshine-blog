import { useContext } from 'react'
import { GlobalContext, GlobalContextValue } from '../context/globalContext'

export const useCache = (): GlobalContextValue => useContext(GlobalContext)
