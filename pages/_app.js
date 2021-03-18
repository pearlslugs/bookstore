import '../styles/globals.css'
import { useAtom } from 'jotai'
import { ChakraProvider } from "@chakra-ui/react"
import Nav from '../src/components/layout/Nav'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
