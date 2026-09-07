import { createContext, useContext, type ReactNode } from 'react'
import { useCmsData } from '../../hooks/useCmsData'
import { getGlobal } from './queries'
import type { Global } from './types'

const GlobalContext = createContext<{ data: Global | null; loading: boolean }>({
  data: null,
  loading: true,
})

export function GlobalProvider({ children }: { children: ReactNode }) {
  const state = useCmsData(getGlobal, [])
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
}

/** Site-wide header/footer/business-info content from Global Settings. */
export function useGlobal() {
  return useContext(GlobalContext)
}
