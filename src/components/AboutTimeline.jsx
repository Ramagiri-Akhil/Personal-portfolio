import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const timelineData = [
  {
    year: "2020",
    title: "🎓 Schooling",
    desc: "Completed my schooling and started exploring technology.",
  },
  {
    year: "2022",
    title: "💻 Started Coding",
    desc: "Began learning programming and web development.",
  },
  {
    year: "2023",
    title: "⚛ Frontend Development",
    desc: "Learned React, TailwindCSS and animation libraries.",
  },
  {
    year: "2024",
    title: "🚀 Frontend Developer Intern — Renix.ai",
    desc: "Worked on building responsive UI components.",
  },
  {
    year: "2025",
    title: "Projects & Portfolio",
    desc: "Built Mooddrift & interactive portfolio websites.",
  },
]

const AboutTimeline = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <>
      {/* LEFT SIDE (TEXT) */}
      <div className="max-w-xl w-full">
        <p className="text-neutral-400 leading-relaxed text-sm md:text-lg">
          I'm Akhil, a frontend developer passionate about creating
          interactive and visually engaging web experiences. I enjoy building
          modern interfaces using React, TailwindCSS and animation libraries
          like Framer Motion.
        </p>
      </div>

      {/* RIGHT SIDE (TIMELINE) */}
      <div ref={ref} className="relative w-full max-w-md">

        {/* base line */}
        <div className="absolute left-2 top-0 w-0.5 h-full bg-neutral-800" />

        {/* glowing progress line */}
        <motion.div
          style={{ height: progressHeight }}
          className="absolute left-2 top-0 w-0.75
          bg-linear-to-b from-purple-500 via-blue-500 to-transparent
          shadow-[0_0_20px_rgba(147,51,234,0.8)]"
        />

        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-10 mb-12 md:mb-16">

            {/* dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="absolute left-0 top-2 w-4 h-4 rounded-full 
              bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.9)]"
            />

            {/* YEAR */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block mb-2 px-3 py-1 text-xs rounded-full
              bg-purple-500/10 text-purple-400 font-semibold"
            >
              {item.year}
            </motion.span>

            {/* TITLE */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-semibold"
            >
              {item.title}
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm md:text-base mt-2 max-w-md"
            >
              {item.desc}
            </motion.p>

          </div>
        ))}
      </div>
    </>
  )
}

export default AboutTimeline