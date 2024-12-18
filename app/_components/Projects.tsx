import ProjectCard from "./ProjectCard";

export default function Experiences() {
    return (
      <section className="container mx-auto px-6 max-w-screen-lg relative pb-16">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-white">
          <span className="font-bold">SOME OF M</span><span className="underline underline-offset-8 font-bold">Y WORKS</span>
        </h2>
        <div className="flex flex-col gap-4">
        <ProjectCard
          title="MNIST-Classification"
          description="This project demonstrates how different neural network architectures perform on the MNIST digit classification task. Featuring shallow neural networks, deeper fully-connected models, and convolutional neural networks (CNNs) "
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/MnistExamples.png/330px-MnistExamples.png"
          techStack={["Supervised Learning", "Deep Fast Forward", "Convolutional Neural Network", "Pytorch"]}
          link="https://github.com/Mxtsxw/MNIST-Classification"
        />

        <ProjectCard
          title="Character Detection"
          description="Exploring different foundational face detection models and embedding techniques to perform character recognition on videos, with YuNet, OpenCV and Dlib "
          image="/project_thumbnail_character_detection.png"
          techStack={["Computer Vision", "Face Detection", "Face recognition", "Python"]}
          link="https://github.com/Mxtsxw/GOT-Character-Detection"
        />

        <ProjectCard
          title="MyAnimeSongs"
          description="Website for cataloging soundtracks from anime and Japanese animated films, developed with Flask."
          image="/project_thumbnail_MyAnimeSongs.jpg"
          techStack={["Flask", "Python", "API"]}
          link="https://github.com/Mxtsxw/MyAnimeSongs"
        />

        <ProjectCard
          title="JavaHTTP"
          description="Lightweight, custom-built HTTP server implemented in Java. "
          image="/project_thumbnail_java_http.png"
          techStack={["Java", "WebSocket", "CRUD API"]}
          link="https://github.com/Mxtsxw/MyAnimeSongs"
        />
        </div>
       
        <div className="container mx-auto py-8 flex items-center justify-center px-16">
      {/* Horizontal line with centered text */}
      <div className="relative w-full flex items-center">
        {/* Left Line */}
        <div className="flex-1 border-t border-gray-500"></div>
        {/* Centered Text */}
        <a href="https://github.com/Mxtsxw" target="_blank" className="hover:scale-105 whitespace-nowrap transition-all duration-300">
        <span className="px-4 text-gray-300 font-semibold ">
          EXPLORE MY GITHUB
        </span>
        </a>
        {/* Right Line */}
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
    </div>
      </section>

    );
  }
  