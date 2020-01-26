import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import Container from '../elements/container'
import content from '../content'

const Section = styled.section`
  padding: 80px 0;
  overflow-x: hidden;
`

const Video = styled.div`
  height: 600px;
  width: 100%;
  max-width: 100%;
  background: #000;
  content: '';
`

const Inner = styled(Container)`
  text-align: center;
`

const MainText = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color1};
  margin-bottom: 14px;
`

const SubText = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.color1};
  margin-bottom: 80px;
`

const Cirlce = styled(motion.div)`
  height: 24vw;
  width: 24vw;
  background: ${({ theme }) => theme.color4};
  position: absolute;
  left: -40px;
  top: 8%;
  border-radius: 50%;
  z-index: -1;
  border: 0;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}

  ${({ outline, color, theme }) =>
    outline &&
    css`
      background: transparent;
      border: 2px solid ${color || theme.color4};
    `}
`

export default () => {
  return (
    <Section>
      <Inner>
        <MainText>{content.hero.mainText}</MainText>
        <SubText>{content.hero.subText}</SubText>
        <Video />
        <Cirlce />
        <Cirlce css="right: -40px; left: auto; top: 40vh;" />
        <Cirlce outline css="width: 30vw; height: 30vw; right: 50vw; left: auto; top: auto; bottom: -60px;" />
      </Inner>
    </Section>
  )
}
