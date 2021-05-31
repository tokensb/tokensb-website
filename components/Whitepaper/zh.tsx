import React from 'react';
import { Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import styles from './index.module.scss';

export default function zh() {
  return (
    <Stack spacing={6} className={styles.whitepaperContainer}>
      <h2>SB 白皮书</h2>
      <blockquote>区块链世界，共识就是一切。</blockquote>
      <blockquote>傻逼的共识也是共识。</blockquote>
      <p>
        SB 是 <strong>100% 社区化代币</strong>，通过兑换机制实现分散化。
      </p>
      <div className={styles.spacer}></div>
      <h3>SB 经济模型</h3>
      <p>
        通证名称: <strong>SB Token</strong>
      </p>
      <p>
        通证符号: <strong>SB</strong>
      </p>
      <p>
        总发行量: <strong>10,000,000,000,000,000 SB</strong>
      </p>
      <div className={styles.spacer}></div>
      <h4>分配</h4>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>比例</Th>
            <Th>分配方式</Th>
            <Th>数量</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>90%</Td>
            <Td>兑换（Swap）</Td>
            <Td>9,000,000,000,000,000</Td>
          </Tr>
          <Tr>
            <Td>10%</Td>
            <Td>空投（Airdrop）</Td>
            <Td>1,000,000,000,000,000</Td>
          </Tr>
        </Tbody>
      </Table>
      <div className={styles.spacer}></div>
      <h4>兑换（Swap）</h4>
      <p>
        SB 兑换比例基于各个区块链上的稳定币（<strong>xUSDT</strong>）。比如火币生态链 Huobi ECO
        Chain (Heco)，基于 USDTHECO 兑换。
      </p>
      <p>
        初始兑换比例:{' '}
        <strong>
          <code>10 xUSDT = 1 SB NFT + 100,000,000 SB</code>
        </strong>
      </p>
      <p>
        每一次兑换，可获取的 SB 数量 <strong>减少 0.01%</strong> 直到{' '}
        <strong>10 xUSDT = 1 SB NFT + 1 SB</strong>
      </p>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>第 1 次</Td>
            <Td>10 xUSDT = 1 SB NFT + 100,000,000 SB (100,000,000 * 0.9999)</Td>
          </Tr>
          <Tr>
            <Td>第 2 次</Td>
            <Td>10 xUSDT = 1 SB NFT + 99,990,000 SB (100,000,000 * 0.9999)</Td>
          </Tr>
          <Tr>
            <Td>第 3 次</Td>
            <Td>10 xUSDT = 1 SB NFT + 99,980,001 SB (99,990,000 * 0.9999)</Td>
          </Tr>
          <Tr>
            <Td>...</Td>
            <Td>...</Td>
          </Tr>
          <Tr>
            <Td>第 999999 次</Td>
            <Td>10 xUSDT = 1 SB NFT + 1 SB</Td>
          </Tr>
          <Tr>
            <Td>第 1000000 次</Td>
            <Td>10 xUSDT = 1 SB NFT + 1 SB</Td>
          </Tr>
        </Tbody>
      </Table>
      <p>
        <strong>每个地址只能兑换一次，每次兑换只能是 10 xUSDT。</strong>
      </p>
      <div className={styles.spacer}></div>
      <h4>空投</h4>
      <p>SB 会不定期空投。</p>
      <div className={styles.spacer}></div>
      <h4>销毁</h4>
      <p>
        集中是对共识的伤害。<strong>每次 SB 转账，会销毁转账数量的 0.01%</strong>（比例未来由 SB DAO
        调整）。
      </p>
      <div className={styles.spacer}></div>
      <h4>资金用途</h4>
      <p>SB 获取的资金的用途由 SB DAO 决定，包括但不限于：添加流动性、研发、市场、慈善等。</p>
      <div className={styles.spacer}></div>
      <h3>SB NFT</h3>
      <p>
        <strong>每个 swap 的账户都可以获得一个唯一的 NFT</strong>，代表这个账户 swap 的排名。每个 SB
        NFT 都是共识的见证和独一无二的艺术品。
      </p>
      <div className={styles.spacer}></div>
      <h3>SB DAO</h3>
      <p>
        SB 属于所有 SB 持币用户，SB 未来会根据 <strong>SB NFT 序号排名</strong> 和{' '}
        <strong>SB 持币量</strong> 分发 DAO 代币，用于 SB 治理。
      </p>
    </Stack>
  );
}
