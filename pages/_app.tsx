import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import { BladeProvider } from '@razorpay/blade/components';
import { bankingTheme, paymentTheme, overrideTheme} from '@razorpay/blade/tokens';

const newColors = {
  300 : 'orange',
  400 : 'orange',
  500 :'yellow',
  600 :'yellow',
  700 :'purple',
  800 :'purple',
}

const buttonColors = {
  active: 'orange',
  default: 'orange',
  disabled: 'grey',
  focus: 'purple',
  hover: 'purple'
}

const backgroundColors = {
  active: 'darkpurple',
  default: 'purple',
  disabled: 'black',
  focus: 'yellow',
  hover: 'yellow'
}

const customTheme = {
  ...paymentTheme,
  colors: {
    ...paymentTheme.colors,
    onDark: {
      ...paymentTheme.colors.onDark,
      brand: {
        ...paymentTheme.colors.onDark.brand,
        primary: {
          ...paymentTheme.colors.onDark.brand.primary,
          ...newColors
        }
      },
      action: {
        ...paymentTheme.colors.onDark.action,
        text: {
          ...paymentTheme.colors.onDark.action.text,
          primary: buttonColors
        },
        background: {
          ...paymentTheme.colors.onDark.action.background,
          primary: backgroundColors
        }
      }
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  console.log(customTheme ,"theme" ,paymentTheme);
  return (
    <>
    <BladeProvider themeTokens={customTheme} colorScheme="dark">
      <Link href="/" prefetch={false}>
        CSR page
      </Link>
      <Link href="/ssr" prefetch={false}>
        SSR page
      </Link>
      <Component {...pageProps} />
    </BladeProvider>
    </>
  )
}

export default MyApp
