import DefaultLayout from '../layouts/default';
import { Container } from '@chakra-ui/react';
import { Wallet } from '../components/Wallet';

function Home() {
  return (
    <DefaultLayout>
      <Container maxW="container.xl">
        <Wallet />
      </Container>
    </DefaultLayout>
  );
}

export default Home;
