import React from 'react';
import { useWeb3React } from '@web3-react/core';

export default function BlockNumber() {
  const { chainId, library } = useWeb3React();

  const [blockNumber, setBlockNumber] = React.useState<number | undefined | null>();

  React.useEffect((): any => {
    if (!!library) {
      let stale = false;

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null);
          }
        });

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber);
      };
      library.on('block', updateBlockNumber);

      return () => {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return <>{blockNumber === null ? 'Error' : blockNumber ?? ''}</>;
}
