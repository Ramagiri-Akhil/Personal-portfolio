import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import Preloader from "./components/Preloader"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      const handleVideoLoaded = () => setLoading(false)

      window.addEventListener("videoLoaded", handleVideoLoaded)

      return () => {
        window.removeEventListener("videoLoaded", handleVideoLoaded)
      }
    } else {
      // ❌ No preloader for other routes
      setLoading(false)
    }
  }, [location.pathname])

  if (loading && location.pathname === "/") {
    return <Preloader onComplete={() => setLoading(false)} />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App