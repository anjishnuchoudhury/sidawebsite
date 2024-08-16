import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const BlogsContainer = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
      <hr className="w-3/4 mx-auto" />
      <h2 className="text-center text-4xl font-bold mt-5">OUR SERVICES</h2>
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-3xl w-full h-60 flex flex-col items-center justify-center text-center m-5 bg-gradient-to-r from-customYellow to-customYellow hover:from-yellow-400 hover:to-yellow-500 transition duration-500 ease-in-out cursor-pointer">
            <img
              className="h-20 w-20"
              src="./digital_marketing.png"
              alt="digital marketing"
            />
            <h3 className="text-black font-bold text-xl">
              DIGITAL
              <br />
              MARKETING
            </h3>
          </div>

          <div className="rounded-3xl w-full h-60 flex flex-col items-center justify-center text-center m-5 bg-gradient-to-r from-customYellow to-customYellow hover:from-yellow-400 hover:to-yellow-500 transition duration-500 ease-in-out cursor-pointer">
            <img
              className="h-20 w-20"
              src="./digital_marketing.png"
              alt="digital marketing"
            />
            <h3 className="text-black font-bold text-xl">
              SOCIAL MEDIA
              <br />
              MANAGEMENT
            </h3>
          </div>
          <div className="rounded-3xl w-full h-60 flex flex-col items-center justify-center text-center m-5 bg-gradient-to-r from-customYellow to-customYellow hover:from-yellow-400 hover:to-yellow-500 transition duration-500 ease-in-out cursor-pointer">
            <img
              className="h-20 w-20"
              src="./digital_marketing.png"
              alt="graphic designing"
            />
            <h3 className="text-black font-bold text-xl">
              GRAPHIC
              <br />
              DESIGNING
            </h3>
          </div>
          <div className="rounded-3xl w-full h-60 flex flex-col items-center justify-center text-center m-5 bg-gradient-to-r from-customYellow to-customYellow hover:from-yellow-400 hover:to-yellow-500 transition duration-500 ease-in-out cursor-pointer">
            <img
              className="h-20 w-20"
              src="./digital_marketing.png"
              alt="paid marketing"
            />
            <h3 className="text-black font-bold text-xl">
              AD
              <br />
              MARKETING
            </h3>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogsContainer
