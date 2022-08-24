import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import { BladeProvider } from '@razorpay/blade/components';
import { bankingTheme, paymentTheme, overrideTheme} from '@razorpay/blade/tokens';
import { PhotoshopPicker, ChromePicker, Color, ColorPickerProps, ColorResult } from "react-color";
import { useState } from 'react';
import tinycolor from 'tinycolor2';

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

const generateColors = (hex: string) => {
  const hsl = tinycolor(hex).toHslString();
  const dark1 = tinycolor(hex).darken(10).toHslString();
  const dark2 = tinycolor(hex).darken(20).toHslString();
  const light1 = tinycolor(hex).lighten(10).toHslString();
  const light2 = tinycolor(hex).lighten(50).toHslString();
  
  const text = tinycolor(hex).toHsl();
  text.l = 0.99;
  const lightFont = tinycolor(text).toHslString();
  text.l = 0.1;
  const darkFont = tinycolor(text).toHslString();
  const textColor = tinycolor.mostReadable(hsl, [lightFont, darkFont]).toHslString();
  const textColorDark = tinycolor(textColor).darken(10).toHslString();

  return { hsl, dark1, dark2, light1, light2, textColor, textColorDark };
}

const generatePalette = (color: any) => {
  const hex = color.hex;
  const { hsl: primaryColor, dark1:primaryDark, dark2: primaryDark2, light1: primaryLight, light2: primaryLight2, textColor: primaryText, textColorDark} = generateColors(hex);
  const secondaryColor = "#fff";
  const secondaryDark = tinycolor(primaryLight).setAlpha(0.1);
  const secondaryText = primaryColor;

  const newTheme = overrideTheme({
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
            },
            // action's background (button bg)
            background: {
              primary: {
                default: primaryColor,
                hover: primaryDark,
                focus: primaryDark,
              },
              secondary: {
                default: secondaryColor,
                hover: secondaryDark,
                focus: secondaryDark,
              },
            },
            // action's border (button border)
            border: {
              primary: {
                default: primaryColor,
                hover: primaryDark,
                focus: primaryDark,
              },
              secondary: {
                default: secondaryColor,
                hover: secondaryDark,
                focus: secondaryDark,
              },
            },
            icon: {
              primary: {
                default: primaryText
              },
              secondary: {
                default: secondaryText
              },
            }
          },
          // text color
          // surface: {
          //   text: {
          //     normal: {
          //       lowContrast: secondaryText,
          //     },
          //   },
          // },
          // brand colors
          brand: {
            primary: {
              '500': primaryColor,
              '400': primaryDark,
              '300': primaryColor,
              '600': primaryColor,
            },
            secondary: {
              '500': secondaryColor,
            },
          },
        },
      },
    },
  });
  return newTheme;
}

function MyApp({ Component, pageProps }: AppProps) {

  const [color, setColor] = useState({
    hsl: { h: 22, s: 1, l: 0.5, a: 1 },
    hex: {}
  });
  const [myTheme, setMyTheme] = useState<any>(generatePalette(color));

  const handleColorChange = (c: any) => {
    setColor(c);
    setMyTheme(generatePalette(c));
  };
  
  return (
    <>
    <BladeProvider themeTokens={myTheme} colorScheme="light">
      <Link href="/" prefetch={false}>
        CSR page
      </Link>
      <Link href="/ssr" prefetch={false}>
        SSR page
      </Link>
      <br />
      <ChromePicker onChangeComplete={handleColorChange} color={color} />
      <Component {...pageProps} />
    </BladeProvider>
    </>
  )
}

export default MyApp