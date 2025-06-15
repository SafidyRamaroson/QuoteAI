import { QuoteCardItemSkeleton } from "../molecules/QuoteCardItemSkeleton";

export function QuotesListSkeleton() {
    const quotes = Array(6).fill(1);

    return (
        <div className="w-full md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {quotes?.map((_, index) => (
                <QuoteCardItemSkeleton
                    key={index}
                />))}
        </div>)
}