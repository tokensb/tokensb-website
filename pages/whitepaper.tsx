import DefaultLayout from '../layouts/default';
import { Container } from '@chakra-ui/react';
import Header from '../components/Header';
import WhitepaperComp from '../components/Whitepaper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Whitepaper() {
  return (
    <DefaultLayout>
      <Container maxW="container.xl">
        <Header hasWalletConnect={false} />
        <WhitepaperComp />
      </Container>
    </DefaultLayout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Whitepaper;
