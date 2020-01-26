import React from 'react'
import styled from 'styled-components'

import Container from './container'
import content from '../content'

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
  padding: 20px 40px;
  transition: all 150ms;
  border: 1px solid #eee;
  border-radius: 8px;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow2};
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 60px;
  background: ${({ theme }) => theme.color3};
  border-radius: 50%;
  margin-right: 30px;

  i {
    color: #fff;
    font-size: 24px;
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
`

export default () => {
  return (
    <Section id="services">
      <Center>
        <MainText>{content.services.mainText}</MainText>
        <SubText>{content.services.subText}</SubText>
      </Center>

      <Container css="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 20px;">
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
