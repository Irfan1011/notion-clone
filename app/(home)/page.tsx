import Heading from "./_components/heading"
import Heroes from "./_components/heroes"

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col gap-8 place-content-center place-items-center p-10 text-center">
        <Heading/>
        <Heroes/>
    </div>
  )
}

export default LandingPage