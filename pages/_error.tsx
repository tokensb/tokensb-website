import { NextPageContext } from 'next';
import NotFound from '../components/NotFound';
import { useTranslation } from 'next-i18next';

function Error({ statusCode }: { statusCode: number | undefined }) {
  const { t } = useTranslation('common');
  return (
    <NotFound
      title={statusCode ? (statusCode === 404 ? '' : t('50x', { statusCode })) : t('500')}
    />
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
