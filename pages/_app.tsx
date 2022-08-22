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

const hue = 248;
const primaryColor = `hsla(${hue}, 100%, 50%, 1)`;
const secondaryColor = `hsla(${hue}, 100%, 99%, 1)`;
const tertiaryColor = `hsla(${hue}, 100%, 96%, 1)`;
const primaryText = `hsla(${hue}, 100%, 99%, 1)`;
const focusColor = `hsla(${hue}, 100%, 80%, 1)`;
const secondaryText = primaryColor;
const tertiaryText = primaryColor;

const theme2 = overrideTheme({
    baseThemeTokens: paymentTheme,
    overrides: {
      colors: {
        onLight: {
          action: {
            // action's text (button text)
            text: {
              primary: {
                default: primaryText,
              },
              secondary: {
                default: secondaryText,
              },
              tertiary: {
                default: tertiaryText,
              },
            },
            // action's background (button bg)
            background: {
              primary: {
                default: primaryColor,
                hover: primaryColor,
                focus: primaryColor,
              },
              secondary: {
                default: secondaryColor,
                hover: secondaryColor,
                focus: secondaryColor,
              },
              tertiary: {
                default: tertiaryColor,
                hover: tertiaryColor,
                focus: tertiaryColor,
              },
            },
            // action's border (button border)
            border: {
              primary: {
                default: primaryColor,
                hover: primaryColor,
                focus: primaryColor,
              },
              secondary: {
                default: primaryColor,
                hover: primaryColor,
                focus: primaryColor,
              },
              tertiary: {
                default: tertiaryColor,
                hover: tertiaryColor,
                focus: tertiaryColor,
              },
            },
          },
          // text color
          surface: {
            text: {
              normal: {
                lowContrast: secondaryText,
              },
            },
          },
          // brand colors
          // brand: {
          //   primary: {
          //     '500': primaryColor,
          //     '400': focusColor,
          //     '300': primaryColor,
          //     '600': primaryColor,
          //   },
          //   secondary: {
          //     '500': secondaryColor,
          //   },
          // },
        },
      },
    },
  });

function MyApp({ Component, pageProps }: AppProps) {
  console.log(customTheme ,"theme" ,paymentTheme);
  return (
    <>
    <BladeProvider themeTokens={theme2} colorScheme="light">
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