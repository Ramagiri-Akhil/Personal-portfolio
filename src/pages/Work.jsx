import SectionLayout from "../components/SectionLayout"
import CardsCarousel from "../components/CardsCarousel"

const cardData = [
  {
    image: "/images/image1.webp",
    title: "Mood Drift",
    description: "AI powered mood tracking platform",
    link: "https://mooddrift.vercel.app/",
  },
  {
    image: "/images/image2.webp",
    title: "Valentine App",
    description: "Interactive love themed web experience",
    link: "https://valentine-app-love.vercel.app/",
  },
  {
    image: "/images/image3.webp",
    title: "Memehub",
    description: "AI generated meme platform",
    link: "https://memhub-two.vercel.app/",
  },
  {
    image: "/images/image4.webp",
    title: "Snooker scoreboard",
    description: "Real-time snooker scoring application",
    link: "https://snooker-scoreboard-five.vercel.app/",
  },
]


const Work = () => {
  return (
 <SectionLayout id="work" title="My" highlight="Works">

      {/* CENTER WRAPPER */}
      <div className="md:col-span-2 w-full mt-10 md:mt-0">

        {/* FORCE CENTER */}
        <div className="flex justify-center">
          <CardsCarousel data={cardData} />
        </div>

      </div>

    </SectionLayout>
  )
}

export default Work