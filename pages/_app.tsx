import { AppProps } from 'next/app';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '../styles/globals.scss';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

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
  colors: {},
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
      xl: '1200px',
    },
  },
  breakpoints: createBreakpoints({
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
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

export default MyApp;
