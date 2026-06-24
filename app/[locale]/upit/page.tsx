import InquiryPage from './InquiryPage';
import Footer from '@/components/Footer';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <InquiryPage locale={locale} />
      <Footer />
    </>
  );
}
