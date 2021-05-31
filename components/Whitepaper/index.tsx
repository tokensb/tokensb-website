import { useRouter } from 'next/router';
import en from './en';
import zh from './zh';

export default function Whitepaper() {
  const router = useRouter();
  switch (router.locale) {
    case 'en':
      return en();
    case 'zh':
      return zh();
    default:
      return en();
  }
}
