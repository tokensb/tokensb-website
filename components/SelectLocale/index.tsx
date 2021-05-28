import React from 'react';
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { supportedLocales } from '../../utils/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styles from './index.module.scss';

export default function SelectLocale() {
  const router = useRouter();
  console.log(router);
  const { t } = useTranslation('common');
  return (
    <Box className={styles.selectLocale}>
      <Menu gutter={20}>
        <MenuButton>
          {t('lang.' + router.locale)} <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {supportedLocales
            .filter(s => s !== router.locale)
            .map(l => (
              <Link href={l + router.asPath} locale={l} key={l}>
                <MenuItem>{t('lang.' + l)}</MenuItem>
              </Link>
            ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
