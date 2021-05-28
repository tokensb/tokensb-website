import { InjectedConnector } from '@web3-react/injected-connector';

export const supportedLocales = ['en', 'zh'];

export const BLOCKCHAINS: any = {
  HECOCHAIN: {
    128: {
      chainName: 'Mainnet',
      chainToken: 'HT',
      scan: {
        address: 'https://hecoinfo.com/address/',
        tx: 'https://hecoinfo.com/tx/',
      },
      tokens: [
        {
          address: '0xa71edc38d189767582c38a3145b5873052c3e47a',
          symbol: 'USDTHECO',
          decimals: 18,
        },
      ],
    },
    256: {
      chainName: 'Testnet',
      chainToken: 'HTT',
      scan: {
        address: 'https://testnet.hecoinfo.com/address/',
        tx: 'https://testnet.hecoinfo.com/tx/',
      },
      tokens: [
        {
          address: '0x04F535663110A392A6504839BEeD34E019FdB4E0',
          symbol: 'USDT',
          decimals: 6,
        },
      ],
    },
  },
};

// heco mainnet - 128
// heco testnet - 256
export const injected = new InjectedConnector({ supportedChainIds: [128, 256] });

export const testnetChainIds = [256];
