import { motion } from "framer-motion"

const SectionLayout = ({ id, title, highlight, children }) => {
  return (
    <section 
    id={id}
    className="min-h-[80vh] md:min-h-screen relative flex flex-col justify-start md:justify-center text-white px-6 md:px-16">

      {/* 🔥 Top Left Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-orbitron absolute top-6 md:top-10 left-6 md:left-16 z-50"
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          {title} <span className="text-orange-600">{highlight}</span>
        </h2>
      </motion.div>

      {/* 🔥 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-x8l w-full grid md:grid-cols-2 gap-10 items-center pt-16 md:pt-0"
      >
        {children}
      </motion.div>

    </section>
  )
}

export default SectionLayout