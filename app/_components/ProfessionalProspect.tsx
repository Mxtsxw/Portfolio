
export default function ProfessionalProspect() {

  return (
    <div className="bg-gray-900 text-gray-300 flex flex-col items-center justify-center p-8">
      {/* Content Div */}
      {(
        <div className="mt-8 bg-gray-800 rounded-lg p-6 w-full max-w-xl shadow-lg">
          {/* Heading */}
          <h3 className="text-white text-2xl font-semibold mb-4 opacity-0 animate-fadeIn">
            My Professional Prospect
          </h3>

          {/* Animated Text */}
          <p
            className="text-gray-300 leading-relaxed opacity-0 animate-fadeIn delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            I aspire to work in an innovative and collaborative environment where I
            can contribute my skills in <span className="text-teal-400 font-medium">Software Engineering</span>, 
            <span className="text-teal-400 font-medium"> Data Science</span>, and 
            <span className="text-teal-400 font-medium"> DevOps</span>. My goal is to solve meaningful problems, 
            grow professionally, and make an impact through technology and teamwork.
          </p>
        </div>
      )}
    </div>
  );
}
