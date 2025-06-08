export type Author = {
    name: string;
    picture?: string;
}

export type Quote = {
    quote: string;
    type: string;
    author: Author;
}
