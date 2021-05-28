import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { useTranslation } from 'next-i18next';
import { Contract, utils } from 'ethers';
import BigNumber from 'bignumber.js';
import { BLOCKCHAINS } from '../../utils/constants';
import NFT from '../NFT';
import Slogan from '../Slogan';
import xrc20 from '../../utils/abi/xrc20';
import styles from './index.module.scss';

enum SwapState {
  'Unconnected' = 'Unconnected',
  'Approve' = 'Approve',
  'Swap' = 'Swap',
}

export default function SwapContainer() {
  const { t } = useTranslation('common');
  const { account, library, chainId } = useWeb3React();
  const [tokenInfo, setTokenInfo] = useState<any>({});
  const [sbAmount, setSbAmount] = useState<number>(0);
  const [connecting, setConnecting] = useState(false);
  const [swapState, setSwapState] = useState(SwapState.Unconnected);

  const spender = '';
  const approveAmount = '1';

  const getSwapState = async (library: any) => {
    if (spender) {
      const tokenInfo = BLOCKCHAINS.HECOCHAIN[chainId!]['tokens'][0];
      const contract = new Contract(tokenInfo.address, xrc20, library);
      const allowanceBalance = await contract.allowance(account, spender);
      const allowanceBalanceNumber = new BigNumber(
        utils.formatUnits(allowanceBalance, tokenInfo.decimals),
      );
      console.log(allowanceBalanceNumber.toString());
      if (allowanceBalanceNumber.comparedTo(new BigNumber(approveAmount)) < 0) {
        setSwapState(SwapState.Approve);
      } else {
        setSwapState(SwapState.Swap);
      }
    }
  };

  useEffect(() => {
    if (chainId) {
      setTokenInfo(BLOCKCHAINS.HECOCHAIN[chainId]['tokens'][0]);
    }
    if (account && chainId && library) {
      setSwapState(SwapState.Approve);
      getSwapState(library);
      setSbAmount(100000000);
    }
  }, [account, library, chainId]);

  const handleApprove = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
    }, 2000);
  };
  const handleSwap = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
    }, 2000);
  };

  return (
    <Grid className={styles.swapContainer} templateColumns="repeat(10, 1fr)" gap={6}>
      <GridItem colSpan={{ base: 10, lg: 4 }} className={styles.grid}>
        <Slogan />
      </GridItem>
      <GridItem colSpan={{ base: 10, lg: 6 }} className={styles.grid}>
        <Box className={styles.swapBoxWrapper}>
          <Box className={styles.swapBox}>
            <h3>{t('swap.swap')}</h3>
            <div className={styles.swapInput}>
              <div className={styles.source}>
                <div className={styles.blockchain}>
                  <img src="/images/hecochain.png" alt={t('swap.hecoChain')} />
                </div>
                <div className={styles.amount}>
                  <span className={styles.number}>10</span>
                  <span className={styles.unit}>{tokenInfo.symbol || 'USDT'}</span>
                </div>
              </div>
              <div className={styles.arrow}>
                <img src="/images/arrow.svg" alt="To" />
              </div>
              <div className={styles.target}>
                <div className={styles.nft}>
                  <div className={styles.nftBox}>
                    <NFT />
                  </div>
                  <div className={styles.desc}>{t('swap.nftDesc')}</div>
                </div>
                <div className={styles.plus}>
                  <img src="/images/plus.png" alt="And" />
                </div>
                <div className={styles.token}>
                  <div className={styles.amount}>
                    <span className={styles.number}>{sbAmount.toLocaleString('en-US')}</span>
                    <span className={styles.unit}>SB</span>
                  </div>
                  <div className={styles.desc}>{t('swap.sbDesc')}</div>
                </div>
              </div>
            </div>
            <div className={styles.desc}>
              {t('swap.swapDesc', { unit: tokenInfo.symbol || 'USDT' })}
            </div>
            <div className={styles.swapButtonWrapper}>
              <Button
                className={styles.swapButton}
                colorScheme="red"
                size="lg"
                color="#FF007A"
                bg="#FDEAF1"
                _hover={{ bg: '#ffe0eb' }}
                _active={{ bg: '#ffe0eb' }}
                disabled={!account}
                onClick={
                  swapState === SwapState.Approve
                    ? handleApprove
                    : swapState === SwapState.Swap
                    ? handleSwap
                    : () => {}
                }
                isLoading={connecting}
                loadingText="Connecting"
              >
                {swapState === SwapState.Approve
                  ? t('swap.btnApprove')
                  : swapState === SwapState.Swap
                  ? t('swap.btnSwap')
                  : t('swap.btnConnect')}
              </Button>
            </div>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
