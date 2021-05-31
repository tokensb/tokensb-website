import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import styles from './index.module.scss';
import WalletConnect from '../WalletConnect';
import SelectLocale from '../SelectLocale';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Header({ hasWalletConnect = true }: { hasWalletConnect?: boolean }) {
  const { t } = useTranslation('common');
  return (
    <Flex className={styles.header}>
      <Box>
        <Heading size="md">
          <Link href="/">
            <a href="/" className={styles.logo} title={t('sbToken')}>
              <img src="/logo.svg" alt={t('sbToken')} />
            </a>
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box className={styles.menus}>
        <Link href="/whitepaper">
          <a href="/whitepaper" className={styles.menu}>
            {t('menu.whitepaper')}
          </a>
        </Link>
        <Link href="/">
          <a
            href="https://github.com/tokensb?tab=repositories"
            target="_blank"
            className={styles.menu}
            rel="noreferrer"
          >
            {t('menu.code')}
          </a>
        </Link>
        <Link href="/airdrop">
          <a href="/airdrop" className={`${styles.menu} ${styles.airdrop}`}>
            {t('menu.airdrop')}
          </a>
        </Link>
        <SelectLocale />
        {hasWalletConnect && <WalletConnect />}
      </Box>
    </Flex>
  );
}
