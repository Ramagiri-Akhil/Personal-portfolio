import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const CardsCarousel = ({ data }) => {
  const [cards, setCards] = useState(data)

  const moveNext = () => {
    setCards((prev) => [...prev.slice(1), prev[0]])
  }

  const movePrev = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)])
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.y < -70 || info.velocity.y < -400) moveNext()
    else if (info.offset.y > 70 || info.velocity.y > 400) movePrev()
  }

  return (
    <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-4xl mx-auto">

{/* LEFT */}
<button
  onClick={movePrev}
  className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-30 
  w-10 h-10 md:w-12 md:h-12 rounded-full 
  bg-white/10 backdrop-blur-md border border-white/20 
  flex items-center justify-center text-white text-xl 
  hover:bg-white/20 transition"
>
  ‹
</button>

{/* RIGHT */}
<button
  onClick={moveNext}
  className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-30 
  w-10 h-10 md:w-12 md:h-12 rounded-full 
  bg-white/10 backdrop-blur-md border border-white/20 
  flex items-center justify-center text-white text-xl 
  hover:bg-white/20 transition"
>
  ›
</button>

      {/* STACK */}
      <div className="relative w-full h-65 sm:h-80 md:h-105 lg:h-130 perspective-distant">
        {cards.map((card, index) => {
          const isFront = index === 0

          return (
            <motion.div
              key={card.image}
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
              animate={{
                scale: 1 - index * 0.05,
                y: index * -18,
                rotateX: index * 5,
                zIndex: cards.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              drag={isFront ? "y" : false}
              dragElastic={0.5}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{
                scale: 1.05,
                rotateX: 8,
              }}
            >
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* OVERLAY */}
              {isFront && (
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-5">

                  <div
                    onClick={() => window.open(card.link, "_blank")}
                    className="flex items-center gap-2 cursor-pointer group w-fit"
                  >
                    <h3 className="text-white text-lg md:text-xl font-semibold border-b border-transparent group-hover:border-white transition">
                      {card.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="text-white group-hover:translate-x-1 transition"
                    />
                  </div>

                  <p className="text-white/80 text-sm mt-1">
                    {card.description}
                  </p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default CardsCarousel