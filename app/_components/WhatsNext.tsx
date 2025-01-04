export default function WhatsNext() {
    return (
      <div className="bg-gray-900 text-gray-300 pt-16 pb-8 px-8 flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h2 className="text-white text-3xl font-bold mb-4">WHAT&apos;S NEXT ?</h2>
  
        {/* Description */}
        <p className="text-gray-400 mb-6 max-w-2xl">
        I am currently seeking an internship opportunity across a broad range of fields. If my profile interests you, feel free to reach out - I would be happy to connect and discuss further!
        </p>
  
        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-teal-600 text-white text-sm font-medium rounded-full px-4 py-1">
            Artificial Intelligence
          </span>
          <span className="bg-teal-600 text-white text-sm font-medium rounded-full px-4 py-1">
            Data Science
          </span>
          <span className="bg-teal-600 text-white text-sm font-medium rounded-full px-4 py-1">
            Machine Learning
          </span>
        </div>
  
        {/* Call to Action */}
        <a
          href="mailto:matthieu.randriantsoa@etu.univ-lyon1.fr"
          className="text-teal-400 font-semibold hover:underline hover:text-teal-300 transition duration-300"
        >
          Reach Me →
        </a>
      </div>
    );
  }
  