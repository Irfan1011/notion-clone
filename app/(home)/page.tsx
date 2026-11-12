import Heading from "./_components/heading"
import Heroes from "./_components/heroes"

const LandingPage = () => {
  return (
    <section className="h-full flex flex-col place-content-center place-items-center px-10 text-center">
        <Heading/>
        <Heroes/>
    </section>
  )
}

export default LandingPage