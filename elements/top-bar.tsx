import React from 'react'
import styled, { css } from 'styled-components'

import Container from './container'
import content from '../content'

const TopBar = styled.div`
  background: ${({ theme }) => theme.color1};
  padding: 6px 0;
  position: sticky;
  top: 0;
  z-index: 10;
`

const Button = styled.a`
  border: 0;
  line-height: 1;
  appearance: none;
  cursor: pointer;
  padding: 10px 14px;
  color: #fff;
  font-size: 14px;
  border-radius: 8px;

  ${({ messenger }) =>
    messenger &&
    css`
      background: #0078ff;
    `}

  &:hover {
    opacity: 0.8;
    color: #fff;
  }

  i {
    margin-right: 4px;
  }
`

const Inner = styled(Container)`
  display: flex;
  justify-content: flex-end;
`

export default () => {
  const cleanedNumber = React.useMemo(() => {
    return content.topbar.phoneNumber.replace(/\D/g, '')
  }, [content.topbar.phoneNumber])

  return (
    <TopBar>
      <Inner>
        <Button phone href={`tel:${cleanedNumber}`}>
          <i className="fas fa-phone"></i> {content.topbar.phoneNumber}
        </Button>
        <Button messenger href={content.topbar.messengerHref} target="_blank">
          <i className="fab fa-facebook-messenger"></i> Send Message
        </Button>
      </Inner>
    </TopBar>
  )
}
