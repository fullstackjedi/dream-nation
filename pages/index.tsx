import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { ComingSoon, Hero, PhoneSection, SwapCrypto, Testimonials } from '@components/home'
import { Footer, Header } from '@components/layout'
import React, { ReactChild, useRef, useState } from 'react'

import Head from 'next/head'

const Home = (): ReactChild => {
  const [isHero, setHero] = useState(false)
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

  const handleCursorZoom = () => {
    setHero(true)
  }

  const handleCursorShrink = () => {
    setHero(false)
  }

  return (
    <Box
      w="100%"
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
        zIndex="50"
        w={isHero ? '10rem' : '2.5rem'}
        h={isHero ? '10rem' : '2.5rem'}
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
      <Box onMouseEnter={handleCursorZoom} onMouseLeave={handleCursorShrink} w="full">
        <Hero />
      </Box>
      <PhoneSection />
      <SwapCrypto />
      <Testimonials />
      <ComingSoon />
      <Footer />
    </Box>
  )
}

export default Home
