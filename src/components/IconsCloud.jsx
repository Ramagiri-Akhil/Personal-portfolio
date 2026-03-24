import { useEffect, useState } from "react"
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud"

const cloudOptions = {
  reverse: true,
  depth: 1,
  wheelZoom: false,
  imageScale: 2,
  activeCursor: "pointer",
  tooltip: "native",
  initial: [0.1, -0.1],
  clickToFront: 500,
  tooltipDelay: 0,
  outlineColour: "#0000",
  maxSpeed: 0.04,
  minSpeed: 0.02,
}

const IconCloud = ({ iconSlugs = [] }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!iconSlugs.length) return
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  if (!data) return null

  const icons = Object.values(data.simpleIcons).map((icon) =>
    renderSimpleIcon({
      icon,
      size: 42,
      bgHex: "#080510",
      fallbackHex: "#ffffff",
      minContrastRatio: 2,
      aProps: {
        title: icon.title,
        onClick: (e) => e.preventDefault(),
      },
    })
  )

  return <Cloud options={cloudOptions}>{icons}</Cloud>
}

export default IconCloud