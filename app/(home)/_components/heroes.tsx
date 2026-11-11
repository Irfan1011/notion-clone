import Image from 'next/image'

const heroes = () => {

  return (
    <article className="flex gap-8 place-content-center place-items-center">
        <Image src="/hero1-light.png" alt="Writing Documents" width={200} height={200} className='dark:hidden'/>
        <Image src="/hero1-dark.png" alt="Writing Documents" width={200} height={200} className='hidden dark:block'/>

        <Image src="/hero2-light.png" alt="Writing Documents" width={180} height={180} className='hidden md:block dark:hidden'/>
        <Image src="/hero2-dark.png" alt="Writing Documents" width={250} height={250} className='hidden md:dark:block'/>

        <Image src="/hero3-light.png" alt="Writing Documents" width={200} height={200} className='hidden lg:block dark:hidden'/>
        <Image src="/hero3-dark.png" alt="Writing Documents" width={200} height={200} className='hidden lg:dark:block'/>
    </article>
  )
}

export default heroes