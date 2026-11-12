import Logo from "./Logo"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="mx-4 md:mx-12 flex justify-between items-center">
        <Logo className="hidden md:flex w-full"/>

        <article className="w-full flex items-center justify-between md:justify-end">
            <Button variant="link" size="xs" className="font-light tracking-wider">Privacy Police</Button>
            <p className="text-xs font-light tracking-wider">@ 2026 Notion Labs, Inc.</p>
        </article>
    </footer>
  )
}

export default Footer