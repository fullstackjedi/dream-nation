import { Box, Container, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <Box bg="#fff" w="100%" pos="fixed" top="0" zIndex="10">
      <Container maxW="114rem">
        <Flex color="#2128BD" justify="space-between" align="center" h="7rem" py="2rem">
          <Link href="#hero">
            <Image w={{ base: '6rem', md: '8rem' }} mr="2rem" src="/images/bluelogo.svg" />
          </Link>
          <HStack spacing="4rem">
            <Link href="#about" display={{ base: 'none', md: 'block' }}>
              About us
            </Link>
            <Link href="#crypto" display={{ base: 'none', md: 'block' }}>
              Crypto
            </Link>
            <Link href="#product" display={{ base: 'none', md: 'block' }}>
              Products
            </Link>
            <Link
              href="mailto:dream9ation@yahoo.com"
              rounded="2.6rem"
              px="2.2rem"
              bg="rgba(1, 96, 254, 0.1)"
              py="1rem">
              Contact us
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export const MobileNav = () => {
  return (
    <Box py="2rem" px="1rem" w="full" h="100vh" pos="fixed" top="0" left="0" bg="#fff" zIndex="100">
      <Flex justify="space-between" align="center">
        <Image w={{ base: '6rem', md: '8rem' }} mr="2rem" src="/images/bluelogo.svg" />
        <Text color="#2128BD" fontWeight="600" fontSize="1.2rem">
          CLOSE
        </Text>
      </Flex>
      <VStack mt="5rem" spacing="2rem" color="#2128BD">
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
      </VStack>
    </Box>
  )
}
