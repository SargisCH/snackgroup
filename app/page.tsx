import { redirect } from 'next/navigation';
import { i18n } from '../next-i18next.config.js';

export default function RootPage() {
  redirect(`/${i18n.defaultLocale}`);
}