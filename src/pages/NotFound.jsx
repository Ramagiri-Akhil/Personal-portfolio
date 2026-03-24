import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 30
      const y = (e.clientY - window.innerHeight / 2) / 30
      setRotate({ x: y, y: x })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* 🌌 Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]" />

      {/* 🦇 Batman/Joker Layer */}
      <motion.div
        style={{
          transform: `perspective(1000px) rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`
        }}
        className="absolute inset-0 opacity-40"
      >
        <div
          className="w-full h-full bg-center bg-no-repeat bg-contain md:bg-cover"
          style={{
            backgroundImage:
              "url('https://media.giphy.com/media/ycshgIP7phJ1C/giphy.gif')",
          }}
        />

        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "url('https://www.bloodyloud.com/wp-content/uploads/2013/02/batman-joker-animated-gif-1.gif')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </motion.div>

      {/* 🧠 TEXT CONTENT */}
      <div className="relative z-10 text-center px-6">

        <h1 className="text-6xl md:text-8xl font-extrabold text-white">
          4<span className="text-orange-600">0</span>4
        </h1>

        <p className="mt-4 text-gray-400 text-sm md:text-lg max-w-md mx-auto leading-relaxed">
          You’ve stepped into the shadows...  
          <br />
          This page doesn’t exist in this dimension.
        </p>

        <p className="mt-2 text-gray-500 text-xs md:text-sm">
          Even Batman couldn’t find this route.
        </p>

        {/* 🔥 BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 rounded-full 
          bg-orange-600 text-white font-semibold
          hover:bg-orange-500 transition
          shadow-[0_0_20px_rgba(249,115,22,0.6)]"
        >
          Return to Base
        </button>
      </div>
    </div>
  )
}