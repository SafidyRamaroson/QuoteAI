'use client'

import { Header } from "@/components/organisms/Header";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-background">
      <div className="w-4/5 mx-auto h-full">
        <Header />
        <h1 className="text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-primary to-transparent text-3xl mt-12 mb-4">
          Bienvenue sur QuoteAI !
        </h1>

        <p className="text-center text-sm">
          En quête d’inspiration pour une scène, un personnage ou une punchline mémorable ? <br /> Glissez quelques mots, un thème, une émotion — l’outil vous souffle <br /> la citation qui fera vibrer vos lecteurs ✍️✨.
        </p>
        
      </div>
    </div>
  );
}
