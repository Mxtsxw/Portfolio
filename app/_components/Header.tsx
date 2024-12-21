import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <header className="container mx-auto max-w-screen-lg px-4 flex flex-col-reverse lg:flex-row items-center justify-between py-12">
      {/* Left Section - Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">MATTHIEU</h1>
        <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-300">
          RANDRIANTSOA
        </h2>
        <h3 className="text-lg lg:text-xl font-medium mt-4 text-gray-400">
          COMPUTER SCIENCE ENGINEERING STUDENT
        </h3>
        <p className="mt-6 text-gray-400 max-w-sm mx-auto lg:mx-0">
          Eager to make your dream ideas come true with a few (or many) lines of
          code :)
        </p>
        {/* Social Links */}
        <div className="flex justify-center lg:justify-start mt-6 space-x-4">
          <a href="https://github.com/Mxtsxw" target="_blank" aria-label="GitHub">
            <Github className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/matthieu-randriantsoa" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="w-80 h-80 lg:w-80 lg:h-80 my-6 lg:my-0 relative">
        <Image
          src="/profile.png"
          alt="Profile"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </header>
  );
}
