import DefaultLayout from '../layouts/default';
import { Container } from '@chakra-ui/react';
import Header from '../components/Header';
import AirdropComp from '../components/Airdrop';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Airdrop() {
  return (
    <DefaultLayout>
      <Container maxW="container.xl">
        <Header hasWalletConnect={false} />
        <AirdropComp />
      </Container>
    </DefaultLayout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Airdrop;
