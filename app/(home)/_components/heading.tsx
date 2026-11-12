'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@components/ui/button"

const HEADINGLABELSDATA = [
    {label: "Think", background: "bg-blue-100", dot: "bg-blue-300"}, 
    {label: "Ship", background: "bg-green-100", dot: "bg-green-300"}, 
    {label: "Create", background: "bg-lime-100", dot: "bg-lime-300"}, 
    {label: "Build", background: "bg-yellow-100", dot: "bg-yellow-300"}, 
    {label: "Jam", background: "bg-blue-100", dot: "bg-blue-300"}, 
    {label: "Scale", background: "bg-stone-100", dot: "bg-stone-300"}]

const heading = () => {
    const [heading, setHeading] = useState(HEADINGLABELSDATA[0])

    useEffect(()=> {
        const labels = HEADINGLABELSDATA.map((label,index) => 
            setInterval(() => {
                setHeading(label)
            },2000 * (index+1))
        )

        return ()=> {
            labels.forEach(label => clearInterval(label))
        }
    },[])

  return (
    <article className="flex flex-col gap-4 place-items-center">
        <h1 className="text-3xl font-bold leading-12">Welcome to Notion Clone. Where teams and agents{" "}
            <span className={`w-fit px-6 inline-flex justify-between items-center gap-2 rounded-full text-black ${heading.background}`}>
                <span className={`w-4 h-4 rounded-full ${heading.dot}`}></span>{heading.label}
            </span> together.
        </h1>
        <h3 className="font-light leading-6">Capture context, find answers, and automate task with AI built for your team.</h3>
        <Button size="lg"><Link href="/dashboard" className="flex items-center gap-2">Enter Notion <ArrowRight/></Link></Button>
    </article>
  )
}

export default heading