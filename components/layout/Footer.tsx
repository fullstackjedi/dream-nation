import { Box, Container, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <Box as="section" className="skewElem" bg="#F7F7FC" w="full">
      <Container fontSize="1.6rem" color="#4E4B66" pb="2rem" pt="3rem" maxW="114rem">
        <Flex flexDir={{ base: 'column', md: 'row' }} justify="space-between">
          <Flex flexDir={{ base: 'column', md: 'row' }} justify={{ base: 'center' }} align="center">
            <Image mr={{ base: '0', md: '2rem' }} w="6rem" src="/images/logo.svg" />
            <HStack
              justify="space-between"
              spacing={{ base: '1rem', md: '2rem', lg: '4rem' }}
              mt={{ base: '2rem', md: '0' }}>
              <NextLink href={'/'} passHref>
                <Link>Home</Link>
              </NextLink>
              <NextLink href={'/'} passHref>
                <Link>Products</Link>
              </NextLink>
              <NextLink href={'/'} passHref>
                <Link>About</Link>
              </NextLink>
              <NextLink href={'/'} passHref>
                <Link>Features</Link>
              </NextLink>
              <NextLink href={'/'} passHref>
                <Link>Contact</Link>
              </NextLink>
            </HStack>
          </Flex>
          <HStack spacing="4rem" justify="center" mt={{ base: '3rem', md: '0' }}>
            {Socials.map((social) => (
              <a key={social.link} href={social.link}>
                <img src={`/images/${social.icon}`} alt="" />
              </a>
            ))}
          </HStack>
        </Flex>
        <Text mt="2.5rem" textAlign="center">
          ©2021 DREAM9ATION. All rights reserved
        </Text>
      </Container>
    </Box>
  )
}

const Socials = [
  {
    link: 'https://www.facebook.com',
    icon: 'fb.svg'
  },
  {
    link: 'https://www.instagram.com',
    icon: 'ig.svg'
  },
  {
    link: 'https://www.youtube.com',
    icon: 'youtube.svg'
  },
  {
    link: 'https://www.twitter.com',
    icon: 'twitter.svg'
  },
  {
    link: 'https://www.linkedin.com',
    icon: 'linkedin.svg'
  }
]
