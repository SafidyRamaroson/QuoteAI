import type { Metadata } from "next";
import { russoOne } from "../fonts";
import { langs } from "@/utils/lang";
import {notFound} from 'next/navigation';
import { Providers } from "../providers";
import '@/app/style/globals.css'

export const metadata: Metadata = {
  title: "QuoteAI – Générateur de citations inspirantes",
  description: "Générez des citations originales et percutantes grâce à l'intelligence artificielle. Sans inscription, instantané et personnalisable.",
};

export default async function LocaleRootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{locale: string}>
}>) {

  const {locale} = await params;

  if (langs.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${russoOne.variable} antialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
