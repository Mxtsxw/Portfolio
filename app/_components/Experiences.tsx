export default function Experiences() {
  return (
    <section className="container mx-auto px-6 max-w-screen-lg relative">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12 text-white">
        MY <span className="font-bold">EXPER</span><span className="underline underline-offset-8 font-bold">IENCES</span>
      </h2>

      {/* Experience Timeline */}
      <div className="relative border-l border-gray-600">

        {/* Experience Item 1 */}
        <div className="mb-12 ml-8 relative">
          <div className="absolute -left-10 w-4 h-4 bg-gray-400 rounded-full"></div>
          <p className="text-gray-400 text-sm mb-1">MARCH 2025 - SEPTEMBER 2025</p>
          <h3 className="text-xl font-semibold text-white">
            Data Scientist Intern &bull; Toyota Motor Europe
          </h3>
          <p className="text-gray-100 mt-2">
            Worked in the R&D Connected Powertrain Division, supporting projects on vehicle reliability through data science and machine learning tasks.
          </p>
          <p>&bull; Built Python data pipelines (Scikit-learn, Pandas) to reconstruct incomplete or erroneous driving datasets, enabling accurate simulations for R&D processes.</p>
          <p>&bull; Created tailored solutions aligned with internal R&D constraints, improving data quality and supporting research efforts.</p>
          <p>&bull; Designed predictive models for early detection of battery failures using supervised and unsupervised learning, including time series forecasting.</p>
          <p>&bull; Enhanced model performance by 5% through algorithm optimization and feature engineering, proposing forecasting methods to further boost predictive performance.</p>
          <p>&bull; Created customer behavior profiles and delivered insights through clear visualizations for engineers and leadership.</p>

          {/* Tech Stack Badges */}
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Python
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Scikit-learn
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Pandas
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Machine Learning
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Data Visualization
            </span>
          </div>
        </div>


        {/* Experience Item 2 */}
        <div className="mb-12 ml-8 relative">
          <div className="absolute -left-10 w-4 h-4 bg-gray-400 rounded-full"></div>
          <p className="text-gray-400 text-sm mb-1">SEPTEMBER 2023 - FEBRUARY 2024</p>
          <h3 className="text-xl font-semibold text-white">
          Software Engineer Intern &bull; AXOPEN
          </h3>
          <p className="text-gray-100 mt-2">
          Developed a management platform for professionals using Spring Boot and Angular.
          </p>
          <p>&bull; Maintained and enhanced application performance by resolving bugs and adding new features.
          </p>
          <p>
          &bull; Utilized SonarQube to ensure code quality, resulting in a 20% reduction in code issues.
          
          </p>
          <p>&bull; Developed and optimized Java-based image processing algorithms, improving efficiency and enabling support
          for new image formats.</p>
          {/* Tech Stack Badges */}
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Spring Boot
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Angular
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Java
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Typescript
            </span>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="mb-12 ml-8 relative">
          <div className="absolute -left-10 w-4 h-4 bg-gray-400 rounded-full"></div>
          <p className="text-gray-400 text-sm mb-1">APRIL 2022 - JUNE 2022</p>
          <h3 className="text-xl font-semibold text-white">
          Software developer and Data Science Intern &bull; Laboratoire d’Informatique Fondamental d’Orléans
          </h3>
          <p className="text-gray-100 mt-2">
            Developed a web-based educational solution integrating educational data mining with data preprocessing and
    visualization.
          </p>
          <p>&bull; Built a Flask application to deploy machine learning models with a user-friendly interface.</p>
          <p>&bull; Processed and optimized 6,000 training data entries using Python, enhancing model accuracy and efficiency.</p>
          

          {/* Tech Stack Badges */}
          <div className="flex gap-2 mt-4">
          <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Python
            </span>
          <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Pandas
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Scikit-learn
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Flask
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Javascript
            </span>
            <span className="px-2 py-1 bg-sky-600 text-white rounded-full text-xs">
              Vega Lite
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
