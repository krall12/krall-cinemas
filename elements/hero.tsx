import React from 'react'
import styled, { css } from 'styled-components'

import Container from './container'
import Circle from './circle'
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

const transition = {
  yoyo: Infinity,
  ease: 'linear',
  duration: 5
}

export default () => {
  return (
    <Section>
      <Inner>
        <MainText>{content.hero.mainText}</MainText>
        <SubText>{content.hero.subText}</SubText>
        <Video />
        <Circle animate={{ opacity: .2 }} transition={transition} />
        <Circle animate={{ scale: 1.2 }} transition={transition} css="right: -40px; left: auto; top: 40vh;" />
        <Circle outline css="width: 30vw; height: 30vw; right: 50vw; left: auto; top: auto; bottom: -60px;" />
      </Inner>
    </Section>
  )
}
