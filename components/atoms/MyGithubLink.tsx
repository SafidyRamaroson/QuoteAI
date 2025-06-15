'use client';

import Image from "next/image";
import Link from "next/link";


export function MyGithubLink() {
    return (
        <Link href='https://github.com/SafidyRamaroson/QuoteAI.git' target='_blank' rel='noopener noreferrer'>
            <Image
                src='/assets/github.png'
                alt='My Github Link'
                width={225}
                height={225}    
                priority
                className="w-10 h-10 object-cover"
            />
        </Link>
    )
}