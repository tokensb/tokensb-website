import React, { useEffect, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Networks, shorter, TOKENS_BY_NETWORK } from '../../utils';
import { Balance } from '../Balance';
import { TokenList } from '../TokenList';
import { useEagerConnect } from '../../hooks/useEagerConnect';
import { useInactiveListener } from '../../hooks/useInactiveListener';
import { EthSWRConfig } from '../../hooks/useEtherSWR';

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    Networks.MainNet, // Mainet
    Networks.Ropsten, // Ropsten
    Networks.Rinkeby, // Rinkeby
    Networks.Goerli, // Goerli
    Networks.Kovan, // Kovan
  ],
});

export const Wallet = () => {
  const { chainId, account, library, activate, active, connector } = useWeb3React<Web3Provider>();

  // [
  //   [ 0x00001, JSONABI ]
  // ]
  const ABIs = useMemo(() => {
    return chainId
      ? (TOKENS_BY_NETWORK[chainId] || []).map<[string, any]>(({ address, abi }) => [address, abi])
      : [];
  }, [chainId]);

  const onClick = () => {
    activate(injectedConnector);
  };

  console.log({ ABIs });
  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState();
  useEffect(() => {
    console.log('Wallet running');
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // mount only once or face issues :P
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {shorter(account!)}</div>
      {active ? (
        <div>
          <span role="img" aria-label="right">
            ✅
          </span>
        </div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect
        </button>
      )}
      {active && chainId && (
        <EthSWRConfig value={{ provider: library, ABIs: new Map(ABIs), refreshInterval: 30000 }}>
          <Balance />
          <TokenList chainId={chainId} />
        </EthSWRConfig>
      )}
    </div>
  );
};
