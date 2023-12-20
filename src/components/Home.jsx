import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shahzaib
        </h1>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Typewriter
            options={{
              strings: [
                "I'm a React.Js Developer.",
                "I'm a Mern-Stack Dev.",
                "I love coding.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </h3>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am looking for a position as a Junior MERN Stack Developer. I am
          proficient in MongoDB, Express.js, React, and Node.js. Strong
          problem-solving skills. I like to take challenges and work day and
          night until I get the results.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
