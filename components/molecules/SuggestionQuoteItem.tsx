'use client';

type Props = {
    prompt: string
}

export function SuggestionQuotePrompt({ prompt }:Props){
    return(
        <p className="flex flex-1 text-xs font-light text-justify border border-slate-300 rounded-md p-2 cursor-pointer hover:border-primary">
            { prompt }
        </p>
    )
}