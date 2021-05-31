import React from 'react';
import { Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import styles from './index.module.scss';

export default function en() {
  return (
    <Stack spacing={6} className={styles.whitepaperContainer}>
      <h2>SB Whitepaper</h2>
      <blockquote>In the blockchain world, consensus is everything.</blockquote>
      <blockquote>Everyone is consensus.</blockquote>
      <p>
        SB is a <strong>100% community token</strong>, which is decentralized through swap
        mechanisms and smart contracts.
      </p>
      <div className={styles.spacer}></div>
      <h3>SB TOKENOMICS</h3>
      <p>
        Token Name: <strong>SB Token</strong>
      </p>
      <p>
        Token Symbol: <strong>SB</strong>
      </p>
      <p>
        Maximum Supply: <strong>10,000,000,000,000,000 SB</strong>
      </p>
      <div className={styles.spacer}></div>
      <h4>Allocation</h4>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Ratio</Th>
            <Th>Allocation</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>90%</Td>
            <Td>Swap</Td>
            <Td>9,000,000,000,000,000</Td>
          </Tr>
          <Tr>
            <Td>10%</Td>
            <Td>Airdrop</Td>
            <Td>1,000,000,000,000,000</Td>
          </Tr>
        </Tbody>
      </Table>
      <div className={styles.spacer}></div>
      <h4>Swap</h4>
      <p>
        The SB swap ratio is based on the stablecoin (<strong>xUSDT</strong>) on each blockchain.
        For example, it based on USDTHECO on Huobi ECO Chain (Heco).
      </p>
      <p>
        Initial swap ratio:{' '}
        <strong>
          <code>10 xUSDT = 1 SB NFT + 100,000,000 SB</code>
        </strong>
      </p>
      <p>
        After each swap, the amount of SB that can be swapped is <strong>reduced by 0.01%</strong>{' '}
        until <strong>10 xUSDT = 1 SB NFT + 1 SB</strong>
      </p>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>1st</Td>
            <Td>10 xUSDT = 1 SB NFT + 100,000,000 SB (100,000,000 * 0.9999)</Td>
          </Tr>
          <Tr>
            <Td>2nd</Td>
            <Td>10 xUSDT = 1 SB NFT + 99,990,000 SB (100,000,000 * 0.9999)</Td>
          </Tr>
          <Tr>
            <Td>3rd</Td>
            <Td>10 xUSDT = 1 SB NFT + 99,980,001 SB (99,990,000 * 0.9999)</Td>
          </Tr>
          <Tr>
            <Td>...</Td>
            <Td>...</Td>
          </Tr>
          <Tr>
            <Td>999999th</Td>
            <Td>10 xUSDT = 1 SB NFT + 1 SB</Td>
          </Tr>
          <Tr>
            <Td>1000000th</Td>
            <Td>10 xUSDT = 1 SB NFT + 1 SB</Td>
          </Tr>
        </Tbody>
      </Table>
      <p>
        <strong>Each address can only swap once and only 10 xUSDT allowed.</strong>
      </p>
      <div className={styles.spacer}></div>
      <h4>Airdrop</h4>
      <p>We will announce SB Airdrop from time to time.</p>
      <div className={styles.spacer}></div>
      <h4>Burning</h4>
      <p>
        Concentration hurts consensus. <strong>After every successful SB transfer, 0.01%</strong>{' '}
        (the ratio will be adjusted by SB DAO in the future){' '}
        <strong>of the transfer amount will be burn</strong>.
      </p>
      <div className={styles.spacer}></div>
      <h4>Use of funds</h4>
      <p>
        The purpose of the funds we obtain is determined by SB DAO, including but not limited to:
        adding liquidity, R & D, marketing, charity, etc.
      </p>
      <div className={styles.spacer}></div>
      <h3>SB NFT</h3>
      <p>
        <strong>Each swap account can get a unique SB NFT</strong>, which represents the ranking of
        the swap. Each SB NFT is a testimony of consensus and unique artwork.
      </p>
      <div className={styles.spacer}></div>
      <h3>SB DAO</h3>
      <p>
        SB belongs to all SB holders. In the future, SB will distribute DAO tokens based on the{' '}
        <strong>SB NFT serial number ranking</strong> and <strong>SB holdings</strong> for SB
        governance.
      </p>
    </Stack>
  );
}
