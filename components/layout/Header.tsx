import { Container, Flex, HStack, Image, Link } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <Container maxW="114rem">
      <Flex color="#2128BD" justify="space-between" align="center" h="7rem" py="2rem">
        <Image w={{ base: '6rem', md: '8rem' }} mr="2rem" src="/images/bluelogo.svg" />
        <Image w="3rem" src="/images/ham.png" display={{ base: 'block', md: 'none' }} />
        <HStack spacing="4rem" display={{ base: 'none', md: 'flex' }}>
          <NextLink href={'/'} passHref>
            <Link>About us</Link>
          </NextLink>
          <NextLink href={'/'} passHref>
            <Link>Crypto</Link>
          </NextLink>
          <NextLink href={'/'} passHref>
            <Link>Products</Link>
          </NextLink>
          <NextLink href={'/'} passHref>
            <Link rounded="2.6rem" px="2.2rem" bg="rgba(1, 96, 254, 0.1)" py="1rem">
              Contact us
            </Link>
          </NextLink>
        </HStack>
      </Flex>
    </Container>
  )
}
