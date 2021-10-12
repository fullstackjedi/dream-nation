import { Box, Container, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'

import React from 'react'

export const Footer = () => {
  return (
    <Box as="section" className="skewElem" bg="#F7F7FC" w="full">
      <Container fontSize="1.6rem" color="#4E4B66" pb="2rem" pt="3rem" maxW="114rem">
        <Flex flexDir={{ base: 'column', md: 'row' }} justify="space-between">
          <Flex flexDir={{ base: 'column', md: 'row' }} justify={{ base: 'center' }} align="center">
            <Link href="#hero">
              <Image mr={{ base: '0', md: '2rem' }} w="6rem" src="/images/logo.svg" />
            </Link>
            <HStack
              justify="space-between"
              spacing={{ base: '1rem', md: '2rem', lg: '4rem' }}
              mt={{ base: '2rem', md: '0' }}>
              <Link href="#about">About</Link>
              <Link href="#product">Products</Link>
              <Link href="mailto:dream9ation@yahoo.com">Contact</Link>
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
    link: 'https://facebook.com/dream9ation/',
    icon: 'fb.svg'
  },
  {
    link: 'https://instagram.com/dream9ation',
    icon: 'ig.svg'
  },
  {
    link: 'https://youtube.com/channel/UCLwXnVMeGeP8m_wmq3sn7Dw',
    icon: 'youtube.svg'
  },
  // {
  //   link: 'https://www.twitter.com',
  //   icon: 'twitter.svg'
  // },
  {
    link: 'https://www.linkedin.com',
    icon: 'linkedin.svg'
  }
]
