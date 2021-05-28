import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import styles from './index.module.scss';
import WalletConnect from '../WalletConnect';
import SelectLocale from '../SelectLocale';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Header() {
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
        <Link href="/">
          <a href="/" className={styles.menu}>
            {t('menu.about')}
          </a>
        </Link>
        <Link href="/">
          <a href="/" className={styles.menu}>
            {t('menu.code')}
          </a>
        </Link>
        <Link href="/">
          <a href="/" className={`${styles.menu} ${styles.airdrop}`}>
            {t('menu.airdrop')}
          </a>
        </Link>
        <SelectLocale />
        <WalletConnect />
      </Box>
    </Flex>
  );
}
