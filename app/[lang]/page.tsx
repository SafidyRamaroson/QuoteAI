import { Header } from "@/components/organisms/Header";
import { getDictionary } from "./dictionnaries";
import QuoteGeneratorClient from "@/components/organisms/QuoteGeneratorClient";
import React from "react";


export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'fr' | 'en' }>
}) {

  const dict = await getDictionary((await params).lang);

  const suggestions = [dict.quote.suggestions[1], dict.quote.suggestions[2]];

  return (
    <div className="relative w-screen min-h-screen bg-transparent">
      <div className="w-4/5 mx-auto h-full z-10">
        <Header />
        <h1 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-primary to-transparent text-3xl mt-24 mb-4">
          {dict.home.welcomeText}
        </h1>

        <p className="text-center text-sm font-semibold">
          {dict.home.description.split('\\n').map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index < dict.home.description.split('\\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <QuoteGeneratorClient dict={dict} suggestions={suggestions} />
      </div>
    </div>
  );
}
