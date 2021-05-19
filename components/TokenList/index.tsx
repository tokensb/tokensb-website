import React from 'react';
import { TOKENS_BY_NETWORK } from '../../utils';
import { TokenBalance } from '../TokenBalance';

export const TokenList = ({ chainId }: { chainId: number | undefined }) => {
  return (
    <>
      {chainId
        ? (TOKENS_BY_NETWORK[chainId] || []).map(token => (
            <TokenBalance key={token.address} {...token} />
          ))
        : null}
    </>
  );
};
