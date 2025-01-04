import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  link,
}: {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}) {
    return (
        <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-gray-300 rounded-lg p-6 flex flex-col gap-6 items-start shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">

        {/* Top Section: Image and Content */}
        <div className="flex gap-6 items-start w-full">
          {/* Image Placeholder */}
          <div className="w-36 h-36 bg-gray-400 rounded-md flex-shrink-0 relative">
          <Image 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
            layout="fill"
          />
          </div>
  
          {/* Content */}
            <div className="w-full">
            {/* Title */}
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-400 mb-4">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech: string, index: number) => (
                <span
                    key={index}
                    className="bg-teal-600 text-white text-xs rounded-full px-2 py-1"
                >
                    {tech}
                </span>
                ))}
            </div>

            {/* "En savoir plus" Link */}
            <div className="flex justify-end mt-4">
                <a
                href={link}
                className="text-teal-400 hover:underline text-sm font-medium"
                target="blank"
                >
                More about
                </a>
            </div>
        </div>

        </div>

      </a>
    );
  }
  