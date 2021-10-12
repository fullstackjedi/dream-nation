import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

import React from 'react'

export const SwapCrypto = () => {
  return (
    <>
      <Box id="about" as="section" className="skewElem" w="full" bg="#575DE6">
        <Container maxW="114rem">
          <Flex
            flexDir={{ base: 'column-reverse', md: 'row' }}
            py={{ base: '10rem', md: '15rem', lg: '21rem' }}
            color="#fff"
            align="center"
            justify="space-between">
            <Box w={{ base: '100%', md: '50%' }} maxW="49rem" my={{ base: '4rem', md: '0' }}>
              <Heading fontWeight="bolder" fontFamily="Recoleta SemiBold" fontSize="3.6rem">
                <Text as="span" color="#39C478">
                  Swap
                </Text>{' '}
                from one crypto to another
              </Heading>
              <Text mt={{ base: '2rem', md: '2.7rem' }} fontSize={{ base: '1.7rem', md: '2.4rem' }}>
                Dream9ation Digital Limited offers Cryptocurrency payment solutions which allows you
                convert your coins to fiat(#), swap your coins from one crypto to another, or make
                payments using cryptocurrencies.
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '50%' }}>
              <Image w="80%" mx={{ base: 'auto', md: 'inherit' }} src="/images/comingsoon.svg" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box id="crypto" as="section" className="skewElem" w="full">
        <Container maxW="114rem">
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            pt={{ base: '4rem', md: '9rem', lg: '13rem' }}
            pb={{ base: '7rem', md: '13rem', lg: '17rem' }}
            align="center">
            <Box w={{ base: '100%', md: '50%' }}>
              <Image w="80%" src="/images/vector.svg" />
            </Box>
            <Box mt={{ base: '4rem', md: '0' }} w={{ base: '100%', md: '50%' }}>
              <Text mt={{ base: '2rem', md: '2.7rem' }} fontSize={{ base: '1.7rem', md: '2.4rem' }}>
                Dream9ation Digital Limited is a crypto payment solution brand that specializes in
                providing seamless crypto services which include conversion, swapping and digital
                payment solutions. Dream9ation is fully registered with the CAC with registration
                number 1812911
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
