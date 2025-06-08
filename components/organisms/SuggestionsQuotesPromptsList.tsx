'use client';

import { SuggestionQuotePrompt } from "../molecules/SuggestionQuoteItem";

type Props = {
    suggestions: string[]
}
export function SuggestionsQuotesPromptsList({ suggestions }: Props) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 md:w-3/5 w-full mx-auto">
            {suggestions?.map((suggestion, index) => {
                return (
                    <SuggestionQuotePrompt
                        key={suggestion + index}
                        prompt={suggestion}
                    />
                )
            })}
        </div>
    )
}