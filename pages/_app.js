import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import Footer from '../components/Footer'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="container is-max-desktop my-6">
      <div className="box has-background-light p-6">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
