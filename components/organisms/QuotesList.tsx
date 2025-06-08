'use client';

import { Quote } from "@/types";
import { QuoteCardItem } from "../molecules/QuoteCardItem";

type Props = {
    quotes: Quote[]
}

export function QuotesList({ quotes }: Props) {
    return (
        <div className="w-full md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {quotes?.map((quote, index) => (
            <QuoteCardItem
                key={index}
                quote={quote}
                onCopy={() => alert("Copying")}
                onVoice={() => alert('onVoicing')}
            />))}
        </div>
    )
}