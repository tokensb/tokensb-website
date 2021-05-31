import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styles from './index.module.scss';

export default function NFT({ uniqueNo }: { uniqueNo: number | undefined | null }) {
  const nftPrefix = 'SB NFT NO.';
  useEffect(() => {
    // @ts-ignore
    if (uniqueNo && window.Pictogrify) {
      // @ts-ignore
      new window.Pictogrify(nftPrefix + uniqueNo).render(document.querySelector('#nft'));
    }
  }, [uniqueNo]);
  return <Box className={styles.nft} id="nft"></Box>;
}
