//Generate quotes by prompt user

import { fetchResource } from "@/lib/fetch"

export const generateQuotesBasedOnPrompt = async (prompt: string) => {
    const quotes = await fetchResource({
        resourceName: 'quote',
        method: 'POST',
        body: { prompt },
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    console.log('quotes',quotes);
    return quotes;
}

