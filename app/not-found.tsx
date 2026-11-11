"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@components/ui/button"
import { SquareArrowLeft } from "lucide-react"

const NotFound = () => {
    const router = useRouter()

  return (
    <section className="h-full place-content-center place-items-center">
        <Image src="/notFound-light.png" alt="Not Found" width={200} height={200} className="dark:hidden"/>
        <Image src="/notFound-dark.png" alt="Not Found" width={200} height={200} className="hidden dark:block"/>

        <article className="text-center mx-8">
            <h1 className="font-bold capitalize tracking-wide">Page Not Found</h1>
            <p className="font-thin mb-2 leading-5 tracking-tight">Either this page doesn't exist, or you don't have access to this page.</p>
            
            <Button variant="outline" size="sm" onClick={() => router.back()}>
               <SquareArrowLeft/> Go back to previous page.
            </Button>
        </article>
    </section>
  )
}

export default NotFound