import { ArrowUpRight } from "lucide-react"

const ResumeButton = () => {

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Ramagiri_Akhil_Resume.pdf"
    link.click()
  }

  return (
    <div
      className="
      fixed z-50
      bottom-30 right-6
      lg:bottom-10 lg:right-[calc(50%-720px)]
      "
    >
      <button
        onClick={downloadResume}
        className="
        relative flex items-center
        text-sm font-medium
        rounded-full
        h-12 pl-6 pr-14
        bg-white text-black
        shadow-lg
        overflow-hidden
        group
        transition-all duration-500
        hover:pl-12 hover:pr-6
        "
      >
        <span className="relative z-10 whitespace-nowrap">
          Get Resume
        </span>

        <div
          className="
          absolute right-1
          w-10 h-10
          bg-black text-white
          rounded-full
          flex items-center justify-center
          transition-all duration-500
          group-hover:right-[calc(100%-44px)]
          group-hover:rotate-45
          "
        >
          <ArrowUpRight size={16}/>
        </div>
      </button>
    </div>
  )
}

export default ResumeButton