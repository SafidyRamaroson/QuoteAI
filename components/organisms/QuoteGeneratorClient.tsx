"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SuggestionsQuotesPromptsList } from "@/components/organisms/SuggestionsQuotesPromptsList";
import { QuotesList } from "@/components/organisms/QuotesList";
import { Sparkles } from "lucide-react";
import { generateQuotesBasedOnPrompt } from "@/services/quoteApiRest";
import { Quote } from "@/types";
import { Dictionary } from "@/app/[lang]/dictionnaries";
import { QuotesListSkeleton } from "./QuotesListSkeleton";

type QuoteGeneratorClientProps = {
  dict: Dictionary;
  suggestions: string[];
};

export default function QuoteGeneratorClient({
  dict,
  suggestions,
}: QuoteGeneratorClientProps) {
  const [prompt, setPrompt] = useState<string>("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await generateQuotesBasedOnPrompt(prompt);
      const parsedQuotes = JSON.parse(
        response.candidates[0].content.parts[0].text
      );
      setQuotes(parsedQuotes);
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    } finally {
      setPrompt("");
      setLoading(false);
    }
  };

  return (
    <div>
      <SuggestionsQuotesPromptsList
        onClickSuggestionQuote={setPrompt}
        suggestions={suggestions}
      />
      <div className="relative md:w-3/5 w-full mx-auto mt-8">
        <Textarea
          placeholder={dict.quote.textarea.placeholder}
          className="pr-13 pb-2 shadow-lg"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <Button
          className="absolute bottom-1 right-1 cursor-pointer"
          onClick={fetchQuotes}
          disabled={loading || !prompt.trim()}
        >
          <Sparkles className={loading ? "animate-ping" : ""} />
        </Button>
      </div>
      {loading ? <QuotesListSkeleton /> : <QuotesList quotes={quotes} />}
    </div>
  );
}
