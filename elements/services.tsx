import React from 'react'
import styled from 'styled-components'

import Container from './container'
import content from '../content'
import Circle from './circle'

const Section = styled.section`
  padding: 60px 0;
  overflow-x: hidden;
`

const Center = styled(Container)`
  text-align: center;
`

const MainText = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.color1};
  margin-bottom: 14px;
`

const SubText = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.color1};
  margin-bottom: 60px;
`

const ServiceItem = styled.div`
  display: flex;
  padding: 30px;
  transition: all 150ms;
  border-radius: 8px;

  &:hover {
    background: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow1};
  }

  @media (max-width: 600px) {
    padding: 0;
    margin-bottom: 30px;

    &:hover {
      box-shadow: none;
    }
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 60px;
  background: ${({ theme }) => theme.color2};
  border-radius: 50%;
  margin-right: 30px;
  color: #fff;
  font-size: 24px;

  @media (max-width: 600px) {
    margin-right: 14px;
    height: 50px;
    min-width: 50px;
    font-size: 20px;
  }
`

const ContentWrap = styled.div`
  h3 {
    margin-top: 14px;
    font-size: 30px;
  }

  p {
    line-height: 2;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    h3 {
      margin-top: 8px;
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }
`

export default () => {
  return (
    <Section id="services">
      <Center>
        <MainText>{content.services.mainText}</MainText>
        <SubText>{content.services.subText}</SubText>
      </Center>

      <Container>
        <Circle css="opacity: .5;" />
        <Circle css="right: -40px; left: auto; top: 30vh; opacity: .4;" />
        {content.services.group.map((service, key) => (
          <ServiceItem key={key}>
            <IconWrap>
              <i className={service.icon} />
            </IconWrap>
            <ContentWrap>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ContentWrap>
          </ServiceItem>
        ))}
      </Container>
    </Section>
  )
}
