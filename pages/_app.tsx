import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Link href="/" prefetch={false}>
    CSR page
  </Link>
  <Link href="/ssr" prefetch={false}>
    SSR page
  </Link>
  <Component {...pageProps} />
  </>
}

export default MyApp
