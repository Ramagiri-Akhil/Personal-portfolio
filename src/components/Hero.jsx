import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FRAME_COUNT = 192;

const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [storyIndex, setStoryIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const story = [
    { frame: 0,   line1: "Hello, I am",          line2: "Ramagiri Akhil" },
    { frame: 48,  line1: "Frontend Developer",    line2: "" },
    { frame: 96,  line1: "I build cinematic",     line2: "web experiences" },
    { frame: 144, line1: "Welcome to",            line2: "my portfolio" },
  ];

  // Prevent scroll restoration + scroll to top
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    let loadedCount = 0;
    const images = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setLoaded(true);
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Draw frame on canvas based on scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img?.complete) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Cover-fit the image (like object-cover)
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollTop = -rect.top;
      const maxScroll = container.offsetHeight - window.innerHeight;
      const fraction = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      const frameIndex = Math.min(
        Math.floor(fraction * FRAME_COUNT),
        FRAME_COUNT - 1
      );

      drawFrame(frameIndex);

      // Update story text
      for (let i = story.length - 1; i >= 0; i--) {
        if (frameIndex >= story[i].frame) {
          setStoryIndex((prev) => (prev !== i ? i : prev));
          break;
        }
      }
    };

    // Draw first frame on load
    if (loaded) drawFrame(0);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <section id="hero">
      <div ref={containerRef} className="h-[500vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden relative">

          {/* CANVAS */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          />

          {/* Loading screen */}
          {!loaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
              <p className="text-white font-orbitron tracking-widest text-sm animate-pulse">
                Loading...
              </p>
            </div>
          )}

          {/* TEXT */}
          {loaded && (
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
                  <h1 className="font-orbitron text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-widest">
                    {story[storyIndex].line1}
                  </h1>
                  {story[storyIndex].line2 && (
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-3d text-white/80 mix-blend-exclusion">
                      {story[storyIndex].line2}
                    </h2>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Hero;