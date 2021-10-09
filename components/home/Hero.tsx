import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { MovingCircle } from './MovingCircle'
import React from 'react'

export const Hero = () => {
  return (
    <Container maxW="114rem" pos="relative">
      <Flex h={{ base: 'calc(80vh - 7rem)', md: '75rem' }} justify="center" align="center">
        <Box textAlign="center" pos="relative" zIndex="1">
          <Heading
            fontFamily="Recoleta SemiBold"
            fontWeight="900"
            fontSize={{ base: '6rem', md: '9rem' }}
            color="#2128bd">
            Crypto is Life
          </Heading>
          <Text mt="1.5rem" fontSize="1.6rem">
            To us crypto is life. We breathe, eat and speak crypto
          </Text>
        </Box>
      </Flex>

      <Image pos="absolute" bottom="1rem" left="1rem" src="/images/arrow.svg" />

      <MovingCircle size="2rem" color="#2128bd" left="10%" delay="0" />
      <MovingCircle size="1rem" color="#FFE5E3" left="20%" delay="1s" />
      <MovingCircle size="2.5rem" color="#FF5E00" left="30%" delay="0.5s" />
      <MovingCircle size="0.8rem" color="#2128bd" left="40%" delay="0.2s" />
      <MovingCircle size="1.5rem" color="#2EC5CE" left="50%" delay="2s" />
      <MovingCircle size="2.5rem" color="#FF5E00" left="85%" delay="1s" />
      <MovingCircle size="1rem" color="#2128bd" left="80%" delay="0" />
      <MovingCircle size="0.6rem" color="#2EC5CE" left="95%" delay="1.2s" />
    </Container>
  )
}
