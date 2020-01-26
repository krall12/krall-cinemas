import React from 'react'
import styled from 'styled-components'

import Container from './container'
import content from '../content'

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
  margin-bottom: 40px;
`

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 650px) {
    display: block;
  }
`

const Image = styled.img`
  height: 300px;
  min-width: 300px;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.white};
  display: block;
  margin: 0;
  margin-right: 60px;

  @media (max-width: 800px) {
    margin-right: 20px;
  }

  @media (max-width: 650px) {
    height: 40vw;
    min-width: 40vw;
    float: left;
  }
`

const Description = styled.p`
  text-align: left;
  line-height: 2;
`

export default () => {
  return (
    <Section id="about">
      <Inner>
        <MainText>{content.about.mainText}</MainText>
        <SubText>{content.about.subText}</SubText>

        <ContentWrap>
          <Image src={content.about.meAsset} alt="Megan Smith posing" />
          <Description>{content.about.description}</Description>
        </ContentWrap>
      </Inner>
    </Section>
  )
}
