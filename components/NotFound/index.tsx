import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';

function NotFound({ title }: { title?: string }) {
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
            {title || '404 - Page Not Found'}
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            <Link href="/">Back Home</Link>
          </AlertDescription>
        </Alert>
      </Container>
    </Center>
  );
}

export default NotFound;
