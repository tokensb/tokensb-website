import Head from 'next/head';
import styles from './layout.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

function Layout({ title, children }: Props) {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>{title || t('title')}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
        {/*<link*/}
        {/*  rel="preload"*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"*/}
        {/*  as="style"*/}
        {/*/>*/}
        {/*<link*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}
        <script src="/pictogrify/pictogrify.js"></script>
      </Head>
      {children}
    </div>
  );
}

export default Layout;
