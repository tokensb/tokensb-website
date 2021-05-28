import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function NotFound({ title }: { title?: string }) {
  const { t } = useTranslation('common');
  return (
    <Center h="100vh">
      <Container maxW="container.xl">
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {title || t('404')}
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            <Link href="/">{t('backHome')}</Link>
          </AlertDescription>
        </Alert>
      </Container>
    </Center>
  );
}
