import NotFound from '../components/NotFound';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Error({ statusCode }: { statusCode: number | undefined }) {
  const { t } = useTranslation('common');
  return (
    <NotFound
      title={statusCode ? (statusCode === 404 ? '' : t('50x', { statusCode })) : t('500')}
    />
  );
}

export const getStaticProps = async ({
  locale,
  res,
  err,
}: {
  locale: string;
  res: any;
  err: any;
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    props: {
      statusCode,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Error;
