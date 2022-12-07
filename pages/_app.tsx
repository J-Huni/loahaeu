import type {AppProps} from 'next/app'
import {CssBaseline} from '@mui/material'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CssBaseline />
    </>
  )
}

export default MyApp
