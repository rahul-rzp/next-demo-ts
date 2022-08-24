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

// const hue = 2;
// const primaryColor = `hsla(${hue}, 100%, 50%, 1)`;
// const secondaryColor = `hsla(${hue}, 100%, 99%, 1)`;
// const tertiaryColor = `hsla(${hue}, 100%, 96%, 1)`;
// const primaryText = `hsla(${hue}, 100%, 99%, 1)`;
// const focusColor = `hsla(${hue}, 100%, 80%, 1)`;
// const secondaryText = primaryColor;
// const tertiaryText = primaryColor;

const generateColors = (hex: string) => {
  const hsl = tinycolor(hex).toHslString();
  const dark1 = tinycolor(hex).darken(10).toHslString();
  const dark2 = tinycolor(hex).darken(20).toHslString();
  const light1 = tinycolor(hex).lighten(10).toHslString();
  const light2 = tinycolor(hex).lighten(20).toHslString();
  
  const text = tinycolor(hex).toHsl();
  text.l = 0.99;
  console.log('READability: ', tinycolor.isReadable(hsl, text, {level:"AA",size:"small"}), tinycolor.isReadable(hsl, text, {level:"AAA",size:"small"}), tinycolor.readability(hsl, text))
  if(!tinycolor.isReadable(hsl, text)){
    text.l = 0.1;
    console.log('use black text')
  }
  const textColor = tinycolor(text).toHslString();

  // console.log("COLORS: ", hsl, dark1, dark2, textColor, light1, light2)
  return { hsl, dark1, dark2, light1, light2, textColor};
}

const generatePalette = (color: any) => {
  const hex = color.hex;
  const { hsl: primaryColor, dark1:primaryDark, dark2: primaryDark2, light1: primaryLight, light2: primaryLight2, textColor: primaryText} = generateColors(hex);
  const secondaryColor = "#fff";
  const secondaryText = primaryColor;
  const tertiaryColor = "#fff";
  const tertiaryText = primaryColor;

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
              tertiary: {
                default: tertiaryText,
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
                hover: primaryDark,
                focus: primaryDark,
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
            icon: {
              primary: {
                default: primaryText
              },
              secondary: {
                default: secondaryText
              },
              tertiary: {
                default: tertiaryText
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