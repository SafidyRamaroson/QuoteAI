'use client';

import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";


export function MyGithubLink() {
    return (
        <Link href='https://github.com/SafidyRamaroson'>
            <Image
                src='/assets/github.png'
                alt='My Github Link'
                width={303}
                height={166}
                priority
                className="w-20 h-12"
            />
        </Link>
    )
}