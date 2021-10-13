import { Box, Image, forwardRef } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

import React from 'react'
import styled from '@emotion/styled'

const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)

const StyledMotionBox = styled(MotionBox)`
  animation: flex 5s linear infinite;
  animation-delay: ${({ delay }) => delay || '0s'};

  @keyframes flex {
    0% {
      bottom: 50px;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      bottom: 100%;
    }
  }
`

export const MovingCircle = ({ size, icon, color, left, delay, ...rest }: any) => {
  return (
    <StyledMotionBox
      bg={color}
      delay={delay}
      h={size}
      w={size}
      p="5px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
      left={left}
      bottom="0"
      zIndex="5"
      rounded="50%"
      {...rest}>
      <Image src={`/icons/${icon}.svg`} />
    </StyledMotionBox>
  )
}
