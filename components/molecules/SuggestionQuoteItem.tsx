'use client';

type Props = {
    prompt: string;
    onClickSuggestionQuote: (prompt: string) => void
}

export function SuggestionQuotePrompt({ prompt, onClickSuggestionQuote }:Props){

    return(
        <div
        onClick={() => onClickSuggestionQuote(prompt)}
        className="flex flex-1 text-xs font-light text-justify border border-slate-300 rounded-md p-2 cursor-pointer hover:border-primary">
            { prompt }
        </div>
    )
}