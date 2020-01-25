import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Container from '../elements/container'

const Section = styled.section`
  padding: 60px 0;
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
  margin-bottom: 60px;
`

export default () => {
  return (
    <Section>
      <Inner>
        <MainText dangerouslySetInnerHTML={{ __html: content.mainText }} />
        <SubText dangerouslySetInnerHTML={{ __html: content.subText }} />
        <Video />
      </Inner>
    </Section>
  )
}

const content = {
  videoSrc: '',
  mainText: 'Cinematic Wedding Videography',
  subText: 'Capturing Priceless Moments &amp; Memories'
}
