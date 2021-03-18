import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useBooks from '../src/lib/utils/swr/hooks/useBooks'
import { useEffect } from 'react'
import {
  Flex,
  Box,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react"
import {cartAtom} from '../src/lib/utils/atom/declarations'
import {useAtom} from 'jotai'

export default function Home() {
  const { books } = useBooks()
  const [cart, setCart] = useAtom(cartAtom)
  useEffect(() => {
    if (books) {
      console.log(books)
    }
  }, [books])
  const handleClick = (title, price, stock) => {
    const book = {
      title,
      price,
      stock
    }
    setCart(cart => cart.concat(book))

  }
  return (
    <Flex w="99vw" overflowX="hidden" h="100vh" direction="column" >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="2xl" minH="10rem" as="h2">Books</Text>
      </Box>
      <Flex align="center" justifyContent="center">
        <SimpleGrid columns="2" spacing="9">
          {(books) ? 
            books.map(book => {
              return (
                <Box display="flex" direction="row" minW="20rem" minH="10rem">
                  <Box>
                    <Image
                        boxSize="100px"
                        objectFit="cover"
                        src={book.cover_img}
                        alt={book.title}
                      />
                  </Box>
                  <Box dispaly="flex" minW="8rem" direction="column">
                    <Text>{book.title}</Text>
                    <Text>{book.genre}</Text>
                    <Text>{book.type}</Text>
                    <Box display="flex" alignItems="space-between" justifyContent="space-between" direction="row">
                      <Text>{book.price}</Text>
                      <Text>{book.stock} left</Text>
                    </Box>
                    <Button onClick={() => handleClick(book.title, book.price, book.stock)}>Order</Button>
                  </Box>
                </Box>
              )
            })
        : null}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
