import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'bignumber.js';

export default function Balance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = React.useState<number | null | undefined>();

  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance);
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

  return (
    <>
      {balance === null
        ? 'Error'
        : balance
        ? `${new BigNumber(formatEther(balance!)).toFixed(3)}`
        : ''}
    </>
  );
}
