import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="container mx-auto px-6 max-w-screen-lg relative py-16">
        
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto hidden md:block">
              <Image
                src="/AboutMe.png" // Replace with your image path
                alt="Sports action"
                className="object-cover rounded-lg" 
                width={500}
                height={500}
              />
          </div>

  
        {/* Text Section */}
        <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/2 text-gray-400">
          <h2 className="text-2xl font-bold">MORE ABOUT ME</h2>
          <p className="mt-2 text-sm">
          I’m a computer science engineer with a <span className="text-white font-bold">strong focus on artificial intelligence and data science</span>, currently advancing my expertise at Polytech Lyon and the University of Lyon. My work revolves around solving real-world challenges through <span className="text-white font-bold">machine learning and innovative algorithms</span>.
          </p>
          <p className="mt-2 text-sm">
          I’m deeply interested in exploring how AI can make a difference in security and healthcare. Whether it’s improving decision-making systems or tackling complex data problems, I’m drawn to projects where technology meets <span className="text-white font-bold">critical impact</span>.
          </p>
          <p className="mt-2 text-sm">
          Outside of tech, I’ve spent four years competing in <span className="text-white font-bold">volleyball</span>, developing resilience and teamwork. I also have a passion for <span className="text-white font-bold">filmmaking</span>. Both pursuits reflect my drive for growth and exploration across diverse fields.
          </p>
        </div>
      </div>
        </section>
    );
  }
  