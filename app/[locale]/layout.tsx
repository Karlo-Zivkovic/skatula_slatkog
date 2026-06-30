import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CartProvider } from "@/lib/cart-context";
import "../globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Škatula slatkog",
  description: "Slastičarnica Škatula slatkog – ručno rađene slastice s ljubavlju",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${dancingScript.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            {children}
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
