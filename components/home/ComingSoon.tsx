import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

import React from 'react'

export const ComingSoon = () => {
  return (
    <Box as="section" className="skewElem" w="full">
      <Container maxW="114rem">
        <Flex
          flexDir={{ base: 'column-reverse', md: 'row' }}
          pt={{ base: '8rem', md: '13rem' }}
          pb={{ base: '10rem', md: '17rem' }}
          align="center">
          <Box w={{ base: '100%', md: '50%' }}>
            <Heading fontFamily="Recoleta SemiBold" fontSize="3.6rem">
              Coming soon
            </Heading>
            <Text mt={{ base: '1.5rem', md: '2.7rem' }} fontSize="1.6rem">
              We are building the future of crypto transactions.
            </Text>
          </Box>
          <Box w={{ base: '100%', md: '50%' }} mb={{ base: '4rem', md: '0' }}>
            <Image w={{ base: '100%', md: '80%' }} src="/images/comingsoon2.png" />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
