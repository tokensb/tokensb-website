import React, { useEffect, useState } from 'react';
import { Button, Tag, useToast } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { Web3Provider } from '@ethersproject/providers';
import styles from './index.module.scss';
import useEagerConnect from '../../hooks/useEagerConnect';
import useInactiveListener from '../../hooks/useInactiveListener';
import { BLOCKCHAINS, injected, testnetChainIds } from '../../utils/constants';
import Balance from './Balance';
import TokenBalance from './TokenBalance';

function getErrorMessage(error: Error, t: any) {
  if (error instanceof NoEthereumProviderError) {
    return t('wallet.error.noEthereumProviderError');
  } else if (error instanceof UnsupportedChainIdError) {
    return t('wallet.error.unsupportedChainIdError');
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return t('wallet.error.userRejectedRequestErrorInjected');
  } else {
    console.error(error);
    return t('wallet.error.unknown');
  }
}

export default function WalletConnect() {
  const { t } = useTranslation('common');
  const toast = useToast();
  const context = useWeb3React<Web3Provider>();
  const { chainId, account, activate, error } = context;

  const [connecting, setConnecting] = useState(false);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.closeAll();
      toast({
        title: getErrorMessage(error, t),
        status: 'error',
        variant: 'solid',
        position: 'top',
        isClosable: true,
        duration: 5000,
      });
    }
  }, [error]);

  useEffect(() => {
    if (chainId && testnetChainIds.includes(chainId)) {
      toast.closeAll();
      toast({
        title: t('wallet.error.testnet'),
        status: 'warning',
        variant: 'solid',
        position: 'top',
        isClosable: true,
        duration: 5000,
      });
    }
  }, [chainId]);

  const connectWallet = () => {
    if (!account) {
      setConnecting(true);
      activate(injected).finally(() => {
        setConnecting(false);
      });
    }
  };

  return (
    <>
      <Button
        className={styles.walletConnect}
        colorScheme="orange"
        variant="outline"
        size="md"
        borderRadius={30}
        color="#fda32b"
        borderColor="#fda32b"
        disabled={!triedEager}
        onClick={connectWallet}
        isLoading={connecting}
        loadingText="Connecting"
      >
        {account
          ? `${account.substring(0, 8)}...${account.substring(account.length - 6)}`
          : t('wallet.connect')}
        {account && chainId && (
          <>
            <Tag ml={3} colorScheme="red" size="sm">
              <Balance /> {BLOCKCHAINS.HECOCHAIN[chainId].chainToken}
            </Tag>
            <Tag ml={2} colorScheme="blue" size="sm">
              <TokenBalance />
            </Tag>
          </>
        )}
      </Button>
    </>
  );
}
