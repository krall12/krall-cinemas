import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Container from '../elements/container'

const Section = styled.section`
  background: ${({ theme }) => theme.color4};
  padding: 100px 0;
`

const Video = styled.div`
  height: 400px;
  width: 700px;
  max-width: 100%;
  background: #000;
  content: '';
`

const OverlayText = styled.h1`
  font-size: 70px;
  color: ${({ theme }) => theme.white};
  text-shadow: 2px 2px 0px ${({ theme }) => theme.color1}, 4px 4px 0px ${({ theme }) => theme.color2};
  position: absolute;
  left: 6%;
  bottom: 70px;
  margin: 0;
`

export default () => {
  return (
    <Section>
      <Container>
        <div>
          <OverlayText dangerouslySetInnerHTML={{ __html: content.overlayText }} />
          <Video />
        </div>
      </Container>
    </Section>
  )
}

const content = {
  videoSrc: '',
  overlayText: 'Cinematic<br />Wedding<br />Videography',
  subText: 'Capturing Priceless Moments &amp; Memories'
}
