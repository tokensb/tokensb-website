import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';
import useEtherSWR from '../../hooks/useEtherSWR';
import { MainToken } from '../../utils';

export const Balance = () => {
  const { account, chainId } = useWeb3React<Web3Provider>();
  const { data: balance } = useEtherSWR(['getBalance', account, 'latest']);

  return (
    <>
      {typeof balance !== 'undefined' ? parseFloat(formatEther(balance)).toPrecision(4) : 0}{' '}
      {chainId ? MainToken[chainId] : ''}
    </>
  );
};
