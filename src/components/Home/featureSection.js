import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import Testimonial from "./testimonial"

const FeatureSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(1)
  const [clickedDiv, setClickedDiv] = useState(null)

  useEffect(() => {
    // Set default event to 1 if no div is clicked
    if (selectedEvent === null) {
      setSelectedEvent(1)
    }
  }, [selectedEvent])

  useEffect(() => {
    // Set default div to 1 if no div is clicked
    if (clickedDiv === null) {
      setClickedDiv(1)
    }
  }, [clickedDiv])

  const renderEvent = () => {
    switch (selectedEvent) {
      case 1:
        return (
          <Testimonial
            description="Proin porta vitae nisl vitae tempus. Nullam quis mauris tristique, pharetra mauris vitae, euismod tellus. Nulla nec aliquet nulla, et scelerisque tortor. Nulla tempus, arcu ut sodales vulputate, lacus dui accumsan est, non blandit nulla ex nec neque. Nunc sodales suscipit elit vel lobortis. Curabitur facilisis pretium urna, ut consectetur urna facilisis tempus. Etiam condimentum lacus in est gravida, a viverra nunc varius. Cras pulvinar et magna quis consequat. Proin eget ligula in dui tristique dictum. Sed rhoncus vulputate nisi, in venenatis sem auctor in."
            name="Ofelia Bashirian"
            profession="Senior Project Manager"
            imageSource={
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            }
          />
        )
      case 2:
        return (
          <Testimonial
            description="Nam consequat neque eu neque molestie rhoncus. Proin et condimentum lorem. Nulla at diam neque. Vestibulum vestibulum vitae lorem sit amet gravida. Nulla nec scelerisque diam, a molestie mi. Sed nisi tellus, suscipit ac augue et, efficitur mollis quam. Ut dolor lectus, posuere ut velit vitae, facilisis tincidunt est. Nullam venenatis interdum lacinia. Quisque dignissim risus sem, sed egestas magna ullamcorper sed. Donec mollis lobortis porttitor. Proin tempor nibh orci, vel tincidunt purus pharetra posuere. Donec non ultricies augue, at mollis turpis. Sed varius a dui quis faucibus."
            name="John Doe"
            profession="Product Designer"
            imageSource={
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            }
          />
        )
      case 3:
        return (
          <Testimonial
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mauris imperdiet, bibendum diam vitae, gravida dui. Nunc nec cursus diam. Phasellus hendrerit lorem dapibus eros faucibus, ac dapibus erat sagittis. Proin eu gravida justo. Praesent molestie dapibus molestie. Ut ac ultricies nulla. Praesent vel quam scelerisque, vehicula diam ut, aliquet diam. Nulla pharetra urna lorem, in viverra massa pharetra id. Vestibulum varius sodales justo, eget tincidunt odio vestibulum a."
            name="Jane Smith"
            profession="Software Engineer"
            imageSource={
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            }
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          {[
            { value: "10+", label: "Clients" },
            { value: "25+", label: "Projects" },
            { value: "900+", label: "Hours Worked" },
            { value: "3+", label: "Years of Experience" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-gray-800 to-gray-800 hover:from-purple hover:to-pink transition duration-500 ease-in-out cursor-pointer"
            >
              <h1 className="text-white text-5xl">{item.value}</h1>
              <h3 className="text-white text-2xl">{item.label}</h3>
            </div>
          ))}
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            From rough design files, to <br />
            powerful products
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br />
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              {[
                { label: "Year Founded", value: "2020" },
                { label: "Total Funding", value: "$30M" },
                { label: "Team Members", value: "120" },
              ].map((stat, index) => (
                <div key={index} className="mt-5">
                  <h2 className="text-white opacity-50 text-xl">
                    {stat.label}
                  </h2>
                  <h1 className="text-white text-sm">{stat.value}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Our Core Behaviours</h1>
            <p className="mt-10 text-white opacity-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            Work more easily with everyone
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br />
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          {[
            { title: "Built with speed in mind", id: 1 },
            { title: "Work From anywhere", id: 2 },
            { title: "Chat and share in one tool", id: 3 },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-1/3 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3 cursor-pointer ${
                clickedDiv === item.id
                  ? "bg-yellow-300"
                  : "bg-purple"
              }`}
              onClick={() => {
                setSelectedEvent(item.id)
                setClickedDiv(item.id)
              }}
            >
              <h1 className="text-white text-2xl">{item.title}</h1>
              <p className="mt-10 text-white opacity-50 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          ))}
        </div>
      </Fade>
      {renderEvent()}
    </div>
  )
}

export default FeatureSection
