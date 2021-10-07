import '../styles/fonts.css'

import React, { ReactChild } from 'react'

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles'

const App = ({ Component, pageProps }: AppProps): ReactChild => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
