import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { formatUnits } from '@ethersproject/units';
import { BigNumber } from 'bignumber.js';
import xrc20 from '../../utils/abi/xrc20';
import { BLOCKCHAINS } from '../../utils/constants';
import { Contract } from 'ethers';

export default function TokenBalance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = React.useState<string | null | undefined>();

  React.useEffect((): any => {
    if (!!account && !!library && !!chainId) {
      let stale = false;

      const tokenInfo = BLOCKCHAINS.HECOCHAIN[chainId]['tokens'][0];

      const contract = new Contract(tokenInfo.address, xrc20, library);
      contract
        .balanceOf(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(
              `${new BigNumber(formatUnits(balance, tokenInfo.decimals))
                .integerValue(BigNumber.ROUND_DOWN)
                .toString()} ${tokenInfo.symbol}`,
            );
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return <>{balance === null ? 'Error' : balance}</>;
}
