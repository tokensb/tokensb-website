import { NextPageContext } from 'next';
import NotFound from '../components/NotFound';

function Error({ statusCode }: { statusCode: number | undefined }) {
  return (
    <NotFound
      title={
        statusCode
          ? statusCode === 404
            ? ''
            : `An error ${statusCode} occurred on server`
          : 'An error occurred on client'
      }
    />
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
