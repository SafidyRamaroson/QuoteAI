'use client';

import { ReactNode } from "react";
import { LangProvider } from "@/hooks/useLang";


export function Providers({ children }: { children: ReactNode }){
    return(
        <LangProvider>
            { children }
        </LangProvider>
    )
}