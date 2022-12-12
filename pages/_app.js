import '../styles/globals.css'

import { LangContextProvider } from '../contexts/LangContext'

function MyApp({ Component, pageProps }) {
  return (
    <LangContextProvider>
      <Component {...pageProps} />
    </LangContextProvider>
  )
}

export default MyApp
