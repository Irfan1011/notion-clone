"use client"

import { useTheme } from "next-themes"
import { Suspense } from "react"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Moon, Settings, Sun } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import Logo from "@components/Logo"

const Navbar = () => {
  const {setTheme} = useTheme()

  return (
    <header>
      <nav className="flex justify-between items-center m-4 md:mx-12">
        <Logo />
        <section className="flex items-center gap-2 md:gap-4">
          {/*THEMES*/}
          <DropdownMenu>
            <DropdownMenuTrigger render={
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            }/>
            
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun/> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon/> Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Settings/> System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/*AUTHENTICATION*/}
          <Suspense>
            <Show when="signed-out">
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button>
                  Sign Up
                </Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </Suspense>
        </section>
      </nav>
    </header>
  )
}

export default Navbar