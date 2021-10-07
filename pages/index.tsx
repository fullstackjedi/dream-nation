import { Avatar, Box, Container, Flex, HStack, Heading, Image, Link, Text } from '@chakra-ui/react'
import React, { ReactChild } from 'react'

import Head from 'next/head'
import NextLink from 'next/link'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Container maxW="114rem">
        <Flex color="#2128BD" justify="space-between" py="3rem">
          <Image mr="2rem" src="/images/bluelogo.svg" />
          <HStack spacing="4rem">
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
        <Flex minH="75rem" justify="center" align="center">
          <Box textAlign="center">
            <Heading fontWeight="600" fontSize="9rem" color="#2128bd">
              Crypto is Life
            </Heading>
            <Text mt="1.5rem" fontSize="1.6rem">
              To us crypto is life. We breathe, eat and speak crypto
            </Text>
          </Box>
        </Flex>
      </Container>
      <Box w="full" bg="#F7F7FC">
        <Container maxW="114rem" pt="7rem" pb="16rem">
          <Box textAlign="center" mx="auto">
            <Heading fontSize="4.8rem">The Payment Solution You Need</Heading>
            <Text mt="8px">
              Offering you with the payment solution that will quench your needs.
            </Text>
          </Box>

          <Flex justify="center" mt="12.5rem" mx="auto" pos="relative">
            <Image src="/images/phone.svg" zIndex="2" pos="relative" />
            <Image src="/images/card.svg" w="40rem" pos="absolute" top="10rem" left="21%" />
          </Flex>
        </Container>
      </Box>
      <Box w="full" bg="#575DE6">
        <Container maxW="114rem">
          <Flex py="21rem" color="#fff" align="center" justify="space-between">
            <Box w="50%" maxW="49rem">
              <Heading fontSize="3.6rem">
                <Text as="span" color="#39C478">
                  Swap
                </Text>
                from one crypto to another
              </Heading>
              <Text mt="2.7rem" fontSize="2.4rem">
                Dream9ation Digital Limited offers Cryptocurrency payment solutions which allows you
                convert your coins to fiat(#), swap your coins from one crypto to another, or make
                payments using cryptocurrencies.
              </Text>
            </Box>
            <Box w="50%">
              <Image w="80%" src="/images/comingsoon.svg" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box w="full">
        <Container maxW="114rem">
          <Flex pt="13rem" pb="17rem" align="center">
            <Box w="50%">
              <Image w="80%" src="/images/vector.svg" />
            </Box>
            <Box w="50%">
              <Text mt="2.7rem" fontSize="2.4rem">
                Dream9ation Digital Limited is a crypto payment solution brand that specializes in
                providing seamless crypto services which include conversion, swapping and digital
                payment solutions. Dream9ation is fully registered with the CAC with registration
                number 1812911
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box bg="#F7F7FC" w="full">
        <Container maxW="114rem">
          <Box textAlign="center" mx="auto" pt="9rem">
            <Heading fontSize="4.8rem">What our customers are saying</Heading>
            <Text fontSize="1.6rem">
              Offering you with the payment solution that will quench your needs.
            </Text>
          </Box>
          <Flex maxW="49rem" mx="auto" justify="flex-end" pt="5.5rem" pb="2rem">
            <Image src="/images/quotes.svg" />
          </Flex>
          <Box w="100%" maxW="49rem" mx="auto" pb="2.4rem">
            <HStack spacing="1.5rem">
              <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Heading color="#18191F" fontSize="1.8rem">
                  Jenny Wilson
                </Heading>
                <Text color="#474A57">Vice President</Text>
              </Box>
            </HStack>
            <Text mt="2.4rem" fontSize="1.8rem">
              We had an incredible experience working with Landify and were impressed they made such
              a big difference in only three weeks. Our team is so grateful for the wonderful
              improvements they made and their ability to get familiar with the product concept so
              quickly. It acted as a catalyst to take our design to the next level and get more eyes
              on our product.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box w="full">
        <Container maxW="114rem">
          <Flex pt="13rem" pb="17rem" align="center">
            <Box w="50%">
              <Heading fontSize="3.6rem">Coming soon</Heading>
              <Text mt="2.7rem" fontSize="1.6rem">
                We are building the future of crypto transactions.
              </Text>
            </Box>
            <Box w="50%">
              <Image w="80%" src="/images/comingsoon2.svg" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box bg="#F7F7FC" w="full">
        <Container fontSize="1.6rem" color="#4E4B66" pb="2rem" pt="3rem" maxW="114rem">
          <Flex justify="space-between">
            <HStack spacing="4rem">
              <Image mr="2rem" src="/images/logo.svg" />
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
            <HStack spacing="4rem">
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
    </Box>
  )
}

export default Home

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
