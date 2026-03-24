import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [storyIndex, setStoryIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const story = [
    { time: 0, line1: "Hello, I am", line2: "Ramagiri Akhil" },
    { time: 3, line1: "Frontend Developer", line2: "" },
    { time: 5, line1: "I build cinematic", line2: "web experiences" },
    { time: 7, line1: "Welcome to", line2: "my portfolio" },
  ];

  // Prevent browser restoring scroll position
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    const syncVideo = () => {
      if (!video || !container || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const scrollTop = -rect.top;
      const maxScroll = container.offsetHeight - window.innerHeight;

      const scrollFraction = Math.min(
        Math.max(scrollTop / maxScroll, 0),
        1
      );

      setScrollProgress(scrollFraction);

      const currentTime = video.duration * scrollFraction;
      video.currentTime = currentTime;

      // update story text
      for (let i = story.length - 1; i >= 0; i--) {
        if (currentTime >= story[i].time) {
          setStoryIndex((prev) => (prev !== i ? i : prev));
          break;
        }
      }
    };

    const handleScroll = () => syncVideo();

    video.addEventListener("loadedmetadata", syncVideo);
    window.addEventListener("scroll", handleScroll);

    return () => {
      video.removeEventListener("loadedmetadata", syncVideo);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <section id="hero">
      <div ref={containerRef} className="h-[500vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden relative">
          
          {/* VIDEO */}
          <video
            ref={videoRef}
            src="/hero.mp4"
            muted
            playsInline
            preload="auto"
            onLoadedData={() => window.dispatchEvent(new Event("videoLoaded"))}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ pointerEvents: "none" }}
          />

          {/* TEXT */}
          <div className="absolute inset-0 flex items-center justify-center top-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={storyIndex}
                variants={textAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center px-6"
              >
                {/* First Line */}
                <h1 className="font-orbitron text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-widest">
                  {story[storyIndex].line1}
                </h1>

                {/* Second Line */}
                {story[storyIndex].line2 && (
                  <motion.h2
                    style={{
                      scale: 0.95 + scrollProgress * 0.1,
                    }}
                    className="
                      text-4xl md:text-7xl lg:text-8xl
                      font-black
                      text-3d
                      text-white/80
                      mix-blend-exclusion
                      transition-opacity duration-500
                      transform-gpu
                    "
                  >
                    {story[storyIndex].line2}
                  </motion.h2>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;