import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { formatUnits } from '@ethersproject/units';
import useEtherSWR from '../../hooks/useEtherSWR';

export const TokenBalance = ({
  symbol,
  address,
  decimals,
}: {
  symbol: string;
  address: string;
  decimals: number;
}) => {
  const { account } = useWeb3React<Web3Provider>();
  const { data: balance } = useEtherSWR([address, 'balanceOf', account]);

  return (
    <div>
      {typeof balance !== 'undefined'
        ? parseFloat(formatUnits(balance, decimals)).toPrecision(4)
        : 0}{' '}
      {symbol}
    </div>
  );
};
