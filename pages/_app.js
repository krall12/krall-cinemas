import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

const typography = new Typography(altonTheme)

const theme = {
  colors: {
    color1: '#464159',
    color2: '#6c7b95',
    color3: '#8bbabb',
    color4: '#c7f0db'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Domine:400,700|Open+Sans:400,600,700&display=swap" rel="stylesheet" />
          <style>{typography.toString()}</style>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
