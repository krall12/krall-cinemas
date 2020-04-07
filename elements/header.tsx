import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Container from './container'
import content from '../content'

const BREAK_MOBILE = '600px'

export default () => {
  return (
    <Header>
      <Inner>
        <Logo>
          <span>K</span>
          <span>C</span>
        </Logo>
        <LinkList>
          {content.header.links.map((link, key) => (
            <li key={key}>
              <Link href={link.href}>
                <LinkTag>{link.title}</LinkTag>
              </Link>
            </li>
          ))}
        </LinkList>
      </Inner>
    </Header>
  )
}

const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color1};
  line-height: 1;

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
  color: ${({ theme }) => theme.color1};

  &:hover {
    color: ${({ theme }) => theme.color3};
  }

  @media (max-width: ${BREAK_MOBILE}) {
    padding: 10px;
    padding-bottom: 14px;
    font-size: 14px;
  }
`
