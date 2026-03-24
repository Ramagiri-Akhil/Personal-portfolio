import IconCloud from "../components/IconsCloud";
import SectionLayout from "../components/SectionLayout";

const techIcons = [
  "html5",
  "css3",
  "javascript",
  "react",
  "tailwindcss",
  "framer",
  "vercel",
  "git",
  "github",
  "figma",
]

const Skills = () => {
  return (
<SectionLayout id="skills" title="Tech" highlight="Stack">

      {/* LEFT */}
      <div>
        <p className="text-gray-400 leading-relaxed max-w-md">
          I work with modern frontend technologies to build fast,
          responsive and visually appealing web applications.
          My focus is on creating smooth user experiences using
          React, TailwindCSS and animation libraries.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center">
        <div className="
          w-full
          max-w-75
          sm:max-w-100
          md:max-w-112.5
          aspect-square
          flex items-center justify-center
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-lg
        ">
          <IconCloud iconSlugs={techIcons} />
        </div>
      </div>

    </SectionLayout>

  );
};

export default Skills;
