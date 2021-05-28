import DefaultLayout from '../layouts/default';
import { Container } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import SwapContainer from '../components/SwapContainer';

function Home() {
  return (
    <DefaultLayout>
      <Container maxW="container.xl">
        <Header />
        <SwapContainer />
      </Container>
    </DefaultLayout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
