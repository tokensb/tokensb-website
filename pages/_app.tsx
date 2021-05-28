import { AppProps } from 'next/app';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.scss';

const fontFamily =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const customTheme = {
  styles: {
    global: {
      body: {
        backgroundColor: '#21222E',
      },
    },
  },
  colors: {
    pink: {
      50: '#fcdfef',
      100: '#eeadce',
      200: '#ec6fa9',
      300: '#ff4e9f',
      400: '#ff218b',
      500: '#FF007A',
      600: '#e11677',
      700: '#ab2968',
      800: '#791243',
      900: '#50082a',
    },
    orange: {
      50: '#fff4e7',
      100: '#ffe4c0',
      200: '#ffd18f',
      300: '#ffc26e',
      400: '#FDA32B',
      500: '#e58913',
      600: '#ac6a12',
      700: '#aa6812',
      800: '#71450a',
      900: '#573405',
    },
  },
  fonts: {
    body: fontFamily,
    heading: fontFamily,
    mono: 'Menlo, monospace',
  },
  sizes: {
    container: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1260px',
    },
  },
  breakpoints: createBreakpoints({
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1260px',
  }),
  shadows: {
    outline: 'none',
  },
};

// Extend the theme
const theme = extendTheme(customTheme);

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
