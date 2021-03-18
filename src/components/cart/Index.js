import {cartAtom} from '../../lib/utils/atom/declarations'
import { useAtom } from 'jotai'
import {useEffect} from 'react'
import {
    Box,
    Text,
} from "@chakra-ui/react"
import CartModal from './CartModal'

const Cart = () => {
    const [cart, setCart] = useAtom(cartAtom)
    useEffect(() => {
        console.log(cart)
    }, [cart])
    return (
        <Box marginRight="2rem">
            <CartModal cart={cart}/>
        </Box>
    )
}

export default Cart;