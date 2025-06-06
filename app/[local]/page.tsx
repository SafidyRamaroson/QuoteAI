'use client'

import { Header } from "@/components/organisms/Header";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-background">
       <div className="w-4/5 mx-auto h-full">
          <Header/>
       </div>
    </div>
  );
}
