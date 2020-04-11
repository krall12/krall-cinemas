import React from 'react'
import styled, { css } from 'styled-components'

import Container from '../elements/container'
import MainText from '../elements/main-text'
import Circle from './circle'

import content from '../content'

const transition = {
  yoyo: Infinity,
  ease: 'linear',
  duration: 5,
}

export default () => {
  return (
    <Section id="portfolio">
      <Container css="text-align: center;">
        <MainText css="margin-bottom: 60px;">{content.portfolio.mainText}</MainText>
      </Container>

      {content.portfolio.works.map((work, key) => (
        <Work key={key}>
          <Circle
            animate={{ scale: 1.2 }}
            transition={transition}
            css="right: 40px; left: auto; top: 50vh; opacity: .6;"
          />
          <Underlay />
          <Container>
            <Type>{work.type}</Type>
            <Description>{work.description}</Description>
            <div>
              <Video
                src={work.youtubeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {work.testimonial && (
              <Testimonial>
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

const Section = styled.section`
  padding: 60px 0;
  overflow-x: hidden;
`

const Work = styled.div`
  position: relative;
  padding: 60px 0;

  margin-bottom: 60px;
`

const Video = styled.iframe`
  height: 500px;
  width: 100%;
  max-width: 100%;
  background: #000;
  box-shadow: ${({ theme }) => theme.boxShadow2};

  @media (max-width: 768px) {
    height: 250px;
  }
`

const Description = styled.p`
  color: #fff;
  max-width: 65vw;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    max-width: 85vw;
  }
`

const Testimonial = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: block;
    margin-top: 20px;
  }

  > div {
    margin-left: 40px;

    @media (max-width: 768px) {
      margin: 0;
    }

    p {
      font-style: italic;
      line-height: 2;
      margin-bottom: 10px;
    }

    span {
      font-size: 15px;
      color: #222;
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

  @media (max-width: 768px) {
    width: 98vw;
  }
`

const Type = styled.span`
  text-transform: uppercase;
  font-size: 20px;
  font-family: 'Domine', sans-serif;
  display: block;
  margin-bottom: 10px;
  color: #fff;
`
