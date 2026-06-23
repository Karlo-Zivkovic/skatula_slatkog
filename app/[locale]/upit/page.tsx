import { getTranslations } from 'next-intl/server';
import InquiryPage from './InquiryPage';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <InquiryPage locale={locale} />;
}
