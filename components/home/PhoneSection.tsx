import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

export const PhoneSection = () => {
  const [rotateDegree, setRotateDegree] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: '.phone-section',
      onUpdate: (self) => {
        if (self.direction === 1) {
          setRotateDegree(35)
        } else {
          if (self.progress < 0.5) {
            setRotateDegree(0)
          }
        }
      }
    })
  }, [])

  return (
    <Box as="section" w="full" bg="#F7F7FC">
      <Container maxW="114rem" pt="7rem" pb="16rem">
        <Box textAlign="center" mx="auto">
          <Heading fontFamily="Recoleta SemiBold" fontSize={{ base: '3.5rem', md: '4.8rem' }}>
            The Payment Solution You Need
          </Heading>
          <Text mt="8px">Offering you with the payment solution that will quench your needs.</Text>
        </Box>

        <Flex
          className="phone-section"
          justify="center"
          mt={{ base: '8rem', md: '12.5rem' }}
          mx="auto"
          pos="relative">
          <Image
            w={{ base: '20rem', md: '30rem' }}
            src="/images/phone.png"
            zIndex="2"
            pos="relative"
          />
          <Image
            className="card-img"
            src="/images/card.png"
            w={{ base: '15rem', md: '25rem' }}
            pos="absolute"
            top="5rem"
            left="50%"
            transform={`translateX(-50%) rotate(-${rotateDegree}deg)`}
            transformOrigin="bottom"
            transition="all 1s"
          />
        </Flex>
      </Container>
    </Box>
  )
}
