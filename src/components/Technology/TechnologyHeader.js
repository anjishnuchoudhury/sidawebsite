import React from "react"
import Fade from "react-reveal/Fade"

const TechnologyHeader = () => {
  return (
    <div>
      <div className="p-10 mx-auto  h-80 w-5/6 bg-customYellow rounded-xl flex justify-center text-center flex-col items-center">
        <img
          className="h-80 w-auto transparent"
          src="./technologies.png"
          alt="Technology"
        />
      </div>
      <div className="text-white mx-auto flex text-justify justify-center mt-10 flex-col">
        <span className="flex justify-center text-lg">
          At SIDA Digital, we specialize in crafting innovative digital
          marketing strategies tailored to elevate your brand's online presence.
        </span>
        <br />
        <span className="flex justify-center -mt-5 text-lg">
          Our comprehensive services encompass Digital Marketing, Social Media
          Management, SEO, Content Creation, and more.
        </span>
      </div>
    </div>
  )
}

export default TechnologyHeader
