import React from 'react'
import styled, { css } from 'styled-components'

import Container from '../elements/container'
import MainText from '../elements/main-text'
import Circle from './circle'

import content from '../content'

const Section = styled.section`
  padding: 60px 0;
  overflow-x: hidden;
`

const Work = styled.div`
  position: relative;
  padding: 60px 0;

  margin-bottom: 60px;
`

const Video = styled.div`
  height: 500px;
  width: 100%;
  max-width: 100%;
  background: #000;
  box-shadow: ${({ theme }) => theme.boxShadow2};
`

const Description = styled.p`
  color: #fff;
  max-width: 65vw;
  margin-bottom: 30px;
`

const Testimonial = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 40px;

  > div:first-of-type span {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: #eee;
    display: block;
  }

  > div:last-of-type {
    margin-top: 20px;
    margin-left: 40px;

    p {
      font-style: italic;
      line-height: 2;
      margin-bottom: 10px;
    }
  }
`

const Underlay = styled.div`
  height: 400px;
  width: 70vw;
  position: absolute;
  border-radius: 0 8px 8px 0;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.color2};
  z-index: -2;
`

const Type = styled.span`
  text-transform: uppercase;
  font-size: 20px;
  font-family: 'Domine', sans-serif;
  display: block;
  margin-bottom: 10px;
  color: #fff;
`
const transition = {
  yoyo: Infinity,
  ease: 'linear',
  duration: 5
}

export default () => {
  return (
    <Section id="portfolio">
      <Container css="text-align: center;">
        <MainText css="margin-bottom: 60px;">{content.portfolio.mainText}</MainText>
      </Container>

      {content.portfolio.works.map((work, key) => (
        <Work key={key}>
          <Circle animate={{ scale: 1.2 }} transition={transition} css="right: 40px; left: auto; top: 50vh; opacity: .6;" />
          <Circle animate={{ scale: 0.8 }} transition={transition} outline css="width: 24vw; height: 24vw; left: 4vw; top: 26vw; bottom: -60px;" />
          <Underlay />
          <Container>
            <Type>{work.type}</Type>
            <Description>{work.description}</Description>
            <div>
              <Video />
            </div>
            {work.testimonial && (
              <Testimonial>
                <div>
                  <span />
                </div>
                <div>
                  <p>"{work.testimonial}"</p>
                  <span>- {work.testimonialBy}</span>
                </div>
              </Testimonial>
            )}
          </Container>
        </Work>
      ))}
    </Section>
  )
}
