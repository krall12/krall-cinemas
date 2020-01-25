import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const BREAK_MOBILE = '600px'

const Header = styled.header`
  background: ${({ theme }) => theme.color1};
  box-shadow: ${({ theme }) => theme.boxShadow1};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${BREAK_MOBILE}) {
    flex-direction: column;
    padding-top: 4px;
  }
`

const Logo = styled.p`
  margin: 0;
  color: #fff;

  > span:first-of-type {
    font-size: 40px;
  }

  > span:last-of-type {
    font-size: 24px;
    position: relative;
    top: -5px;
  }
`

const LinkList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 0;
  }
`

const LinkTag = styled.a`
  font-size: 15px;
  padding: 24px 12px;
  display: block;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.color4};
  }

  @media (max-width: ${BREAK_MOBILE}) {
    padding: 10px;
    padding-bottom: 14px;
    font-size: 14px;
  }
`

export default () => {
  return (
    <Header>
      <Container>
        <Logo>
          <span>K</span>
          <span>C</span>
        </Logo>
        <LinkList>
          {links.map((link, key) => (
            <li key={key}>
              <Link href={link.href}>
                <LinkTag>{link.title}</LinkTag>
              </Link>
            </li>
          ))}
        </LinkList>
      </Container>
    </Header>
  )
}

const links = [
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Services',
    href: '#services'
  },
  {
    title: 'Portfolio',
    href: '#portfolio'
  },
  {
    title: 'Pricing',
    href: '#pricing'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]
