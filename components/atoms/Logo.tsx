import Image from "next/image";


export function Logo(){
    return(
        <Image
        src='/assets/logo.png'
        alt="Quote AI Logo"
        width={50}
        height={50}
        className='bg-primary rounded-full'
        />
    )
}