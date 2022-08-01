import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ul>
      <Link href="/" prefetch={false}>
    All users
  </Link>
  <br />
  <Link href="/1" prefetch={false}>
    User 1
  </Link>
  <br />
  <Link href="/5" prefetch={false}>
    User 5
  </Link>
  <br />
  <Link href="/100" prefetch={false}>
    User 100
  </Link>
  </ul>
  <Component {...pageProps} />
  </>
}

export default MyApp
