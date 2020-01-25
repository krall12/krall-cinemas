import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

import TopBar from '../elements/top-bar'
import Header from '../elements/header'

const typography = new Typography(altonTheme)

const theme = {
  color1: '#464159',
  color2: '#6c7b95',
  color3: '#8bbabb',
  color4: '#c7f0db',
  colorBorder: '#C4C4C4',
  white: '#fff',
  black: '#000',
  boxShadow1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  boxShadow2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/solid.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.css" />
          <link href="https://fonts.googleapis.com/css?family=Domine:400,700|Open+Sans:400,600,700&display=swap" rel="stylesheet" />
          <style>{typography.toString()}</style>
        </Head>
        <TopBar />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
