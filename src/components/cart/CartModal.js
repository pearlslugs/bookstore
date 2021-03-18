import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
    ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react"
import {sellBooks} from '../../lib/utils/api/services'


function CartModal({ cart }) {
  let bookTitleArray = []
  let bookstockArray = []
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClick = (bookTitleArray, stocks) => {
    sellBooks(bookTitleArray, stocks)
  }
  return (
    <>
      {cart.length > 0 ? <Button onClick={onOpen}>{cart.length}</Button> : null}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          {cart.map(book => {
            bookTitleArray = bookTitleArray.concat(book.title)
            bookstockArray = bookstockArray.concat(book.stock - 1)
            console.log(bookTitleArray)
            return (
              <Box w="100%" display="flex" padding="2rem" flexDirection="column" alignItems="center">
                <Box>{book.title}</Box>
                <Box>{book.price}</Box>
              </Box>
            )
          })}
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={() => handleClick(bookTitleArray, bookstockArray)}>
              purchase
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CartModal;