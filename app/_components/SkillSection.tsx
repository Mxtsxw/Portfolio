import { FaPython, FaGithub, FaChartBar, FaBrain } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

export default function SkillSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Programming Languages */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-4 right-4 text-teal-400 text-4xl">
              <FaPython />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400">
              Programming Languages
            </h3>
            <p className="text-gray-400">Python, SQL, Java, JavaScript, C++</p>
          </div>

          {/* Card 2: Data Analysis & Visualization */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-4 right-4 text-pink-400 text-4xl">
              <FaChartBar />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400">
              Data Analysis & Visualization
            </h3>
            <p className="text-gray-400">
              Pandas, NumPy, Matplotlib, Seaborn, Tableau, D3.js
            </p>
          </div>

          {/* Card 3: Machine Learning */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-4 right-4 text-purple-400 text-4xl">
              <FaBrain />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400">
              Machine Learning
            </h3>
            <p className="text-gray-400">
              Scikit-learn, PyTorch
            </p>
          </div>

          {/* Card 4: Big Data & Cloud */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-4 right-4 text-yellow-400 text-4xl">
              <VscAzure />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400">
              Big Data & Cloud
            </h3>
            <p className="text-gray-400">Talend Open Studio, Azure, OVH</p>
          </div>

          {/* Card 5: Soft Skills */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-4 right-4 text-blue-400 text-4xl">
              <FaBrain />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400">
              Soft Skills
            </h3>
            <p className="text-gray-400">
              Communication, Teamwork, Critical Thinking, Problem Solving
            </p>
          </div>

          {/* Card 6: Tools & Technologies */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-4 right-4 text-green-400 text-4xl">
              <FaGithub />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400">
              Tools & Technologies
            </h3>
            <p className="text-gray-400">Dataiku DSS, Git, Docker, Jupyter Notebook, MLFlow, DVC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
