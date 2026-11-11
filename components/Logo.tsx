import Link from 'next/link'
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2'>
        <Image src="/logo-light.png" alt="Notion Logo" width={30} height={30} className='dark:hidden'/>
        <Image src="/logo-dark.png" alt="Notion Logo" width={30} height={30} className='hidden dark:block'/>
        <span className="font-bold capitalize">Notion Clone</span>
    </Link>
  )
}

export default Logo