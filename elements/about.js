import React from 'react'
import styled from 'styled-components'

import Container from './container'

const Section = styled.section`
  padding: 60px 0;
  overflow-x: hidden;
  background: ${({ theme }) => theme.color4};
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

const ContentWrap = styled.div``

const Image = styled.img``

export default () => {
  return (
    <Section>
      <Inner>
        <MainText>About Me</MainText>
        <SubText>Storytell at heart.</SubText>

        <ContentWrap>
          <Image />
        </ContentWrap>
      </Inner>
    </Section>
  )
}
