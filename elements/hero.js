import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  background: ${({ theme }) => theme.color4};
  padding: 200px 0;
`

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Square = styled(motion.div)`
  height: 300px;
  width: 300px;
  position: absolute;
  content: '';
  background: #fff;
  left: 40px;
  top: 200px;
`

export default () => {
  return (
    <Section>
      <Container>contet here</Container>
      <Square drag dragTransition={{ power: 0.2 }} />
    </Section>
  )
}
