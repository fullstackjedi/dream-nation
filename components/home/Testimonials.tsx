import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box, Container, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'

import { Avatar } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Testimonials = () => {
  return (
    <Box as="section" className="skewElem" bg="#F7F7FC" w="full">
      <Container maxW="114rem">
        <Box textAlign="center" mx="auto" pt="9rem">
          <Heading fontFamily="Recoleta SemiBold" fontSize={{ base: '3.5rem', md: '4.8rem' }}>
            What our customers are saying
          </Heading>
          <Text fontSize="1.6rem">
            Offering you with the payment solution that will quench your needs.
          </Text>
        </Box>
        <Flex
          maxW="49rem"
          mx="auto"
          justify="flex-end"
          pt={{ base: '3rem', md: '5.5rem' }}
          pb={{ base: '1.5rem', md: '2.5rem' }}>
          <Image w={{ base: '4rem', md: '7rem' }} src="/images/quotes.svg" />
        </Flex>
        <Box w="100%" maxW="49rem" mx="auto" pb="10rem">
          <Slider {...settings}>
            <Box>
              <HStack spacing="1.5rem">
                <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Box>
                  <Heading fontFamily="Inter" color="#18191F" fontSize="1.8rem">
                    Jenny Wilson
                  </Heading>
                  <Text color="#474A57">Vice President</Text>
                </Box>
              </HStack>
              <Text mt="2.4rem" fontSize={{ base: '1.5rem', md: '1.8rem' }}>
                We had an incredible experience working with Landify and were impressed they made
                such a big difference in only three weeks. Our team is so grateful for the wonderful
                improvements they made and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next level and get more
                eyes on our product.
              </Text>
            </Box>
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}
