import React from 'react'
import styled, { css } from 'styled-components'

import Container from './container'
import Circle from './circle'
import content from '../content'

const transition = {
  yoyo: Infinity,
  ease: 'linear',
  duration: 5,
}

export default () => {
  return (
    <Section>
      <Inner>
        <MainText>{content.hero.mainText}</MainText>
        <SubText>{content.hero.subText}</SubText>
        <Video autoPlay loop muted playsInline>
          <source src="/hero-vid.mov" type="video/mp4" />
        </Video>
        <Circle animate={{ opacity: 0.2 }} transition={transition} />
        <Circle animate={{ scale: 1.2 }} transition={transition} css="right: -40px; left: auto; top: 40vh;" />
        <Circle outline css="width: 30vw; height: 30vw; right: 50vw; left: auto; top: auto; bottom: -60px;" />
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  padding: 80px 0;
  overflow-x: hidden;
`

const Video = styled.video`
  width: 100%;

  &:focus {
    outline: none;
  }
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
