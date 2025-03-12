import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <header className="container px-4 flex flex-col content-center max-w-screen-lg mx-auto lg:mt-[25vh] mb-32">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Section - Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">MATTHIEU</h1>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-300">
            RANDRIANTSOA
          </h2>
          <h3 className="text-lg lg:text-xl font-medium mt-4 text-gray-400">
            DATA SCIENCE AND COMPUTER ENGINEERING STUDENT
          </h3>
          <blockquote className="mt-6 text-gray-400 mx-auto lg:mx-0 border-l-4 text-gray-400 pl-4 italic w-full">
            &quot;Eager to make your dream ideas come true with a few (or many) lines of code 😊&quot;
          </blockquote>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
            <a href="https://github.com/Mxtsxw" target="_blank" aria-label="GitHub">
              <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/matthieu-randriantsoa" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-80 h-80 lg:w-96 lg:h-100 my-6 lg:my-0 relative">
          <Image
            src="/profile.png"
            alt="Profile"
            className="rounded-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </header>
  );
}
