export default function Education() {
  return (
    <section className="container mx-auto px-6 max-w-screen-lg relative py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12 text-white">
        <span className="font-bold">EDUC</span><span className="underline underline-offset-8 font-bold">ATION</span>
      </h2>

      {/* Education Timeline */}
      <div className="relative border-l border-gray-600">
        {/* Experience Item 1 */}
        <div className="mb-12 ml-8 relative">
          <div className="absolute -left-10 w-4 h-4 bg-gray-400 rounded-full"></div>
          <p className="text-gray-400 text-sm mb-1">SEPTEMBER 2024 - Current</p>
          <h3 className="text-xl font-semibold text-white">
          University of Lyon 1 &bull; MSc in Data Science and Artificial Intelligence
          </h3>
          {/* Tech Stack Badges */}
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Data Visualization
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Deep Learning Techniques 
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Large Language Models (LLM)
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Computer Vision
            </span>
          </div>
        </div>
        {/* Experience Item 2 */}
        <div className="mb-12 ml-8 relative">
          <div className="absolute -left-10 w-4 h-4 bg-gray-400 rounded-full"></div>
          <p className="text-gray-400 text-sm mb-1">SEPTEMBER 2022 - Current</p>
          <h3 className="text-xl font-semibold text-white">
          Polytech Lyon &bull; MSc in Data Science and Artificial Intelligence
          </h3>
          {/* Tech Stack Badges */}
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Data Visualization
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Deep Learning Techniques 
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Large Language Models (LLM)
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Computer Vision
            </span>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="mb-12 ml-8 relative">
          <div className="absolute -left-10 w-4 h-4 bg-gray-400 rounded-full"></div>
          <p className="text-gray-400 text-sm mb-1">SEPTEMBER 2020 - JUNE 2022</p>
          <h3 className="text-xl font-semibold text-white">
          University of Orléans &bull; Higher National Diploma (HND) in Computer Science
          </h3>
          {/* Tech Stack Badges */}
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Data Structures and Algorithms
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Software Development 
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
            Data Mining
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 flex items-center justify-center px-16">
      {/* Horizontal line with centered text */}
      <div className="relative w-full flex items-center">
        {/* Left Line */}
        <div className="flex-1 border-t border-gray-500"></div>
        {/* Centered Text */}
        <a href="documents/CV_Matthieu_RANDRIANTSOA.pdf" target="_blank" className="hover:scale-105 whitespace-nowrap transition-all duration-300">
        <span className="px-4 text-gray-300 font-semibold whitespace-nowrap">
          SEE MY RESUME
        </span>
        </a>
        {/* Right Line */}
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
    </div>
    </section>
  );
}