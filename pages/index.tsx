import React from 'react'
import styled from 'styled-components'

import Hero from '../elements/hero'
import About from '../elements/about'
import Services from '../elements/services'
import Portfolio from '../elements/portfolio'

const Main = styled.main``

export default () => (
  <Main>
    <Hero />
    <About />
    <Services />
    <Portfolio />
  </Main>
)
