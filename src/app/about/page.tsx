import Link from "next/link";

export default function About() {
    return (
        <div>
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-600 ">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1>Who am i?</h1>
        <h1 className="text-2xl font-bold  mb-4 ">About Me</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <img 
              src="/man.png"
              alt="Picture"
              className=" h-70 w-80 rounded-full mx-auto mt-10"
            />
          <div className="bg-white shadow-lg  rounded-lg overflow-hidden">
            <div className="p-4 text-justify  ">
              {/* <h2 className="text-2xl font-bold mb-2">Project 1</h2> */}
              <p >
              I am a passionate software developer with a strong foundation in building efficient, scalable, and user-friendly applications. With experience across multiple programming languages and frameworks, I enjoy solving complex problems and continuously learning new technologies to stay ahead in a fast-paced industry. Whether working on the back-end or front-end, I strive to deliver high-quality code, clean architecture, and seamless user experiences.
                </p> <p>I am driven by the impact technology can make, and I love collaborating with others to create innovative solutions. From optimizing performance to enhancing UI/UX design, I approach each project with creativity, critical thinking, and attention to detail.
                {/* </p> <p>In my spare time, I enjoy exploring open-source projects, staying updated on the latest tech trends, and contributing to community-driven initiatives. */}
              </p>
      
            </div>
              <Link href="#" className="bg-[#1F2937] mx-6 hover:bg-slate-100 hover:text-black text-white font-bold py-3 px-4 rounded-md text-center">Download Resume</Link>
          </div>
          
        </div>
      </div>
    </div>

        </div>
    )
}