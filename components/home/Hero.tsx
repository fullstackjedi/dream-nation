import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { MovingCircle } from './MovingCircle'
import React from 'react'

export const Hero = () => {
  return (
    <Container id="hero" maxW="114rem" pos="relative">
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
          <Button
            href="https://wa.link/cg2acr"
            target="blank"
            mt="4rem"
            rounded="2rem"
            bg="#0160FE"
            _hover={{
              bg: '#0160FE'
            }}
            color="#fff"
            as="a">
            Trade Now
          </Button>
        </Box>
      </Flex>

      <Image pos="absolute" bottom="1rem" left="1rem" src="/images/arrow.svg" />

      <MovingCircle size="3.2rem" color="#F3BA2F" icon="bnb" left="10%" delay="0" />
      <MovingCircle size="3.2rem" color="#627EEA" icon="eth" left="20%" delay="1s" />
      <MovingCircle size="3.2rem" color="#5B6DEE" icon="snt" left="30%" delay="0.5s" />
      <MovingCircle size="3.2rem" color="#8DC351" icon="bch" left="40%" delay="0.2s" />
      <MovingCircle size="3.5rem" color="#BFBBBB" icon="ltc" left="50%" delay="2s" />
      <MovingCircle size="3.5rem" color="#26A17B" icon="usdt" left="85%" delay="1s" />
      <MovingCircle size="3rem" color="#F7931A" icon="btc" left="80%" delay="0" />
      <MovingCircle size="3.6rem" color="#008CE7" icon="dash" left="95%" delay="1.2s" />
    </Container>
  )
}
