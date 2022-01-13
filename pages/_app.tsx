import '../styles/globals.css'
import { VechaiProvider, extendTheme, colors, ColorScheme } from '@vechaiui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import { Header } from '../components/Header'
import { IdProvider } from '@radix-ui/react-id'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider>
      <Header />
      <div className="container mx-auto px-3">
        <Component {...pageProps} />
      </div>
      <Footer />
    </IdProvider>
  )
}
export default MyApp
