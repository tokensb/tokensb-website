import React from 'react';
import { Stack } from '@chakra-ui/react';
import styles from '../Whitepaper/index.module.scss';
import { useTranslation } from 'next-i18next';

export default function Airdrop() {
  const { t } = useTranslation('common');
  return (
    <Stack spacing={6} className={styles.whitepaperContainer}>
      <h2 className={styles.airdrop}> {t('airdrop.airdrop')}</h2>
      <p> {t('airdrop.comingSoon')}</p>
    </Stack>
  );
}
