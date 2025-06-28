import Image from "next/image";


export function Logo(){
    return(
        <Image
        src='/assets/logo.png'
        alt="Quote AI Logo"
        width={40}
        height={40}
        className='rounded-full mt-2'
        />
    )
}