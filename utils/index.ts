import ERC20ABI from './abi/ERC20.abi.json';

export const Networks = {
  MainNet: 1,
  Ropsten: 3,
  Rinkeby: 4,
  Goerli: 5,
  Kovan: 42,
  HecoChainMainnet: 128,
  HecoChainTestnet: 256,
};

export const MainToken = {
  [Networks.MainNet]: 'ETH',
  [Networks.Ropsten]: 'ETH',
  [Networks.Rinkeby]: 'ETH',
  [Networks.Goerli]: 'ETH',
  [Networks.Kovan]: 'ETH',
  [Networks.HecoChainMainnet]: 'HT',
  [Networks.HecoChainTestnet]: 'HTT',
};

export interface IERC20 {
  symbol: string;
  address: string;
  decimals: number;
  name: string;
  abi: any;
}

export const TOKENS_BY_NETWORK: {
  [key: number]: IERC20[];
} = {
  [Networks.MainNet]: [
    {
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 18,
      abi: ERC20ABI,
    },
  ],
  [Networks.HecoChainMainnet]: [
    {
      address: '0xa71edc38d189767582c38a3145b5873052c3e47a',
      symbol: 'USDTHECO',
      name: 'Heco-Peg USDTHECO Token',
      decimals: 18,
      abi: ERC20ABI,
    },
  ],
  [Networks.HecoChainTestnet]: [
    {
      address: '0x8dd66eefef4b503eb556b1f50880cc04416b916b',
      symbol: 'HUSD',
      name: 'Heco-Peg HUSD Token',
      decimals: 18,
      abi: ERC20ABI,
    },
  ],
};
export const shorter = (str: string) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str;
