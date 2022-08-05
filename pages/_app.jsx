import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('flowbite')
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
      <Script type="text/javascript" async defer src="https://assets.pinterest.com/js/pinit.js"></Script>
    </Layout>
  )
}

export default MyApp
