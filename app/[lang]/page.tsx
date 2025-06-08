import { Header } from "@/components/organisms/Header";
import { QuotesList } from "@/components/organisms/QuotesList";
import { SuggestionsQuotesPromptsList } from "@/components/organisms/SuggestionsQuotesPromptsList";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Quote } from "@/types";
import { Sparkles } from "lucide-react";
import { getDictionary } from "./dictionnaries";
import React from "react";

const exampleQuotes: Quote[] = [
  {
    quote: "Même dans l'ombre, la graine sait qu'elle deviendra lumière.",
    type: 'Inspiration',
    author: { name: "Nelson Mandela" }
  },
  {
    quote: "Quand tu doutes, écris quand même. C’est là que naissent les vraies phrases.",
    type: 'Inspiration',
    author: { name: "Simone de Beauvoir" }
  },
  {
    quote: "L’inspiration ne vient pas à ceux qui l’attendent, mais à ceux qui l’invitent.",
    type: 'Inspiration',
    author: { name: "Marguerite Duras" }
  },
  {
    quote: "Chaque silence porte un mot que l’écrivain seul peut entendre.",
    type: 'Inspiration',
    author: { name: "Victor Hugo" }
  },
  {
    quote: "L’inspiration ne vient pas à ceux qui l’attendent, mais à ceux qui l’invitent.",
    type: 'Inspiration',
    author: { name: "Marguerite Duras" }
  },
  {
    quote: "Chaque silence porte un mot que l’écrivain seul peut entendre.",
    type: 'Inspiration',
    author: { name: "Victor Hugo" }
  }
];

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'fr' | 'en' }>
}) {

  const dict = await getDictionary((await params).lang);

  const suggestions = [dict.quote.suggestions[1], dict.quote.suggestions[2]]

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
        <SuggestionsQuotesPromptsList suggestions={suggestions}/>
        <div className="relative md:w-3/5 w-full mx-auto mt-8">
          <Textarea
            placeholder={dict.quote.textarea.placeholder}
            className="pr-13 pb-2 shadow-lg" />
          <Button className="absolute bottom-1 right-1 cursor-pointer">
            <Sparkles />
          </Button>
        </div>
        <QuotesList quotes={exampleQuotes} />
      </div>
    </div>
  );
}
