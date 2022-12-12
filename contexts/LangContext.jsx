import { createContext, useState } from 'react'

export const LangContext = createContext({ lang: 'ja', setLang: null })

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  return (
    <LangContext.Provider value={{ lang: lang, setLang: setLang }}>
      {children}
    </LangContext.Provider>
  )
}
