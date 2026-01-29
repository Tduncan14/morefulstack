import React from 'react'
import {
    Container,
    Flex,
    HStack,
    Text,
    Button,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { CiShoppingCart } from 'react-icons/ci'
import { MdWbSunny } from 'react-icons/md'
import { WiMoonWaxingCrescent3 } from 'react-icons/wi'
import { useProductStore } from '../store/product'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const { products } = useProductStore()

    return (
        <Container maxW="1140px" px={4} bg={useColorModeValue("gray.900", "gray.100")}>
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
                flexDir={{ base: 'column', sm: 'row' }}
            >
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    textTransform="uppercase"
                    fontSize={{ base: '22px', sm: '28px' }}
                    fontWeight="extrabold"
                >
                    <Link to="/">
                        Product Store <CiShoppingCart />
                    </Link>
                </Text>

                <HStack spacing={2}>
                    <Link to="/create">
                        <Button>
                            <FaRegSquarePlus />
                        </Button>
                    </Link>

                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light'
                            ? <WiMoonWaxingCrescent3 />
                            : <MdWbSunny />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar
