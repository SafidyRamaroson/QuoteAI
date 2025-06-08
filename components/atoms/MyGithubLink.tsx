'use client';

import Image from "next/image";
import Link from "next/link";


export function MyGithubLink() {
    return (
        <Link href='https://github.com/SafidyRamaroson'>
            <Image
                src='/assets/github.png'
                alt='My Github Link'
                width={225}
                height={225}    
                priority
                className="w-12 h-8"
            />
        </Link>
    )
}