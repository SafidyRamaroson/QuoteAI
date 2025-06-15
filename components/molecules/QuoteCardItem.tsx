'use client';

import Image from "next/image";
import { Quote } from "@/types";
import { AudioLines, Copy } from "lucide-react";

type Props = {
    quote: Quote;
    onCopy: (quoteId: string) => void;
    onVoice: (quoteId: string) => void;
};

export function QuoteCardItem({ quote, onCopy, onVoice }: Props) {
    return (
        <div className="relative p-6 rounded-xl bg-primary">
            <div className="flex flex-row items-center justify-between">
                <span className="text-xs uppercase font-semibold text-yellow-20">#{quote.type}</span>
                <div className="flex flex-row items-center gap-2">
                    <AudioLines className="cursor-pointer" onClick={() => onVoice("1")}/>
                    <Copy className="cursor-pointer" onClick={() => onCopy(quote.quote)}/>
                </div>
            </div>

            <p className="text-xl font-bold leading-snug relative pl-3 mt-4 z-20
                before:content-['“']
                before:absolute
                before:left-0
                before:-top-4
                before:text-9xl
                before:text-background
                before:z-10
                before:opacity-50
            ">
                {quote.quote}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3 mt-2">
                {quote.author.picture && (
                    <Image
                        src={quote.author.picture}
                        alt={quote.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                )}
                <div className="text-sm">
                    <p className="font-semibold">{quote.author.name}</p>
                </div>
            </div>
        </div >
    );
}
