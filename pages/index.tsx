import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { ComingSoon, Hero, PhoneSection, SwapCrypto, Testimonials } from '@components/home'
import { Footer, Header } from '@components/layout'
import React, { ReactChild, useRef } from 'react'

import Head from 'next/head'

const Home = (): ReactChild => {
  const cursorRef = useRef<HTMLDivElement>(document.createElement('div'))
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isLargerThan768) {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
      cursorRef.current.style.opacity = '1'
      cursorRef.current.classList.add('blend-mode')
    }
  }

  const handleMouseLeave = () => {
    cursorRef.current.style.opacity = '0'
  }

  return (
    <Box
      w="100%"
      overflowX="hidden"
      fontFamily="Inter"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      cursor="none">
      <Head>
        <title>Dream Nation</title>
      </Head>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        position="fixed"
        zIndex="3"
        w="2.5rem"
        h="2.5rem"
        justify="center"
        align="center"
        pointerEvents="none"
        transform="translate(-50%, -50%)"
        borderRadius="50%"
        bg="#FFCC57"
        ref={cursorRef}
        sx={{
          mixBlendMode: 'difference'
        }}
      />

      <Header />
      <Hero />
      <PhoneSection />
      <SwapCrypto />
      <Testimonials />
      <ComingSoon />

      <Footer />
    </Box>
  )
}

export default Home
