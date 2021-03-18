import {
    Box,
    Text
} from "@chakra-ui/react"
import Cart from '../cart/Index'
const Nav = () => {
    return (
        <Box w="99vw" h="12vh" bg="#021727" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" overflowX="hidden">
            <Text margin="2rem" as="h1" color="white" fontSize="3xl"> Nanu's Fuckin book place, suck it bezos</Text>
            <Cart />
        </Box>
    )
}

export default Nav