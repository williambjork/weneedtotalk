import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <ToastContainer />
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
