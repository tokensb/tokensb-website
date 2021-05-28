import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import styles from './index.module.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Slogan() {
  const { t } = useTranslation('common');
  return (
    <Box className={styles.sloganContainer}>
      <Box className={styles.slogan}>
        <span>{t('slogan.everyone')}</span>{' '}
        <span className={styles.typewriter}>{t('slogan.has')}</span>{' '}
        <span className={styles.emphasize}>{t('slogan.sb')}</span>
      </Box>
      <Box className={styles.slogan}>
        <span>{t('slogan.everyone')}</span>{' '}
        <span className={styles.typewriter}>{t('slogan.has')}</span>{' '}
        <span className={styles.emphasize}>{t('slogan.consensus')}</span>
      </Box>
      <Link href="/whitepaper">
        <Button
          className={styles.btn}
          colorScheme="orange"
          variant="outline"
          borderRadius={30}
          size="lg"
        >
          {t('slogan.readWhitepaper')}
        </Button>
      </Link>
    </Box>
  );
}
